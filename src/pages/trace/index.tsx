import { Button, Col, Input, Row, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { ModalStatus, TraceInfo, TraceType } from './type'
import { PlusCircleOutlined } from '@ant-design/icons'
import AdditionDrawer from './additionDrawer'
import useModal from '../../hooks/useModal'
import { deleteTrace, queryTrace } from '../../api/trace'
import { useEffect, useState } from 'react'

function Trace() {
  const columns: ColumnsType<TraceInfo> = [
    {
      title: '埋点名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '埋点描述',
      dataIndex: 'des',
      key: 'des'
    },
    {
      title: '埋点类型',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: '相关属性',
      dataIndex: 'properties',
      key: 'properties',
      render: (item = []) => {
        return <div>{item.join('、')}</div>
      }
    },
    {
      title: '当日上报数量',
      dataIndex: 'count',
      key: 'count'
    },
    {
      title: '',
      width: '200px',
      render: (text: string, record: TraceInfo, index: number) => {
        return (
          <div>
            <Button onClick={() => editItem(record)} className=" mr-2">
              编辑
            </Button>
            <Button type="primary" onClick={() => deleteItem(record)}>
              删除
            </Button>
          </div>
        )
      }
    }
  ]
  useEffect(() => {
    getTrace()
  }, [])
  const [data, setData] = useState<TraceInfo[]>([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [modalStatus, setModalStatus] = useState<null | TraceInfo>(null)
  const getTrace = async () => {
    const result: any = await queryTrace({})
    const { total, list } = result
    setTotal(total)
    setData(list)
  }
  const handleAddClick = () => {
    setModalStatus(null)
    open()
  }
  const deleteItem = async (item: TraceInfo) => {
    const id = item._id!
    await deleteTrace({ _id: id })
    getTrace()
  }
  const editItem = (item: TraceInfo) => {
    setModalStatus(item)
    open()
  }

  const [visible, open, close] = useModal()
  return (
    <div>
      <Row className=" mb-2">
        <Col span={4} offset={17}>
          <Input placeholder="名称/描述"></Input>
        </Col>
        <Col span={3}>
          <div className=" flex">
            <Button
              onClick={handleAddClick}
              className=" mx-3 w-full "
              type="primary"
              icon={<PlusCircleOutlined />}
            >
              新建埋点
            </Button>
            <Button
              onClick={handleAddClick}
              className=" mx-3 w-full "
              type="primary"
            >
              导出
            </Button>
          </div>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 25
        }}
      />

      <AdditionDrawer
        visible={visible}
        close={close}
        refresh={() => getTrace()}
        status={modalStatus}
      ></AdditionDrawer>
    </div>
  )
}

export default Trace
