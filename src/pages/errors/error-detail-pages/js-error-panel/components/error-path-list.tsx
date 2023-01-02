import { List } from 'antd'
type ListData = {
  path: string
  count: number
}
function ListItem(props: ListData) {
  const { path, count } = props
  return (
    <div className=" flex justify-between items-center px-2 py-5 ">
      <span className=" font-semibold">{path}</span>
      <span className=" text-primary-900">{count}</span>
    </div>
  )
}
function ErrorPathList() {
  const data: Array<ListData> = [
    {
      path: 'wc/example/a.js',
      count: 200
    },
    {
      path: 'wc/example/a.js',
      count: 200
    }
  ]
  return (
    <List
      dataSource={data}
      renderItem={(item) => <ListItem {...item}></ListItem>}
    ></List>
  )
}

export default ErrorPathList
