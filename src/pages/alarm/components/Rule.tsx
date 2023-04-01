import { AlarmOperator, SupportRuleName } from "@/api/alaram";
import { OperatorMap, SupportRuleNameMap } from "../constants";

export function Rule(props: {
  rule: {
    name: SupportRuleName;
    operator: AlarmOperator;
    value: number;
  };
}) {
  const {
    rule: { name, operator, value },
  } = props;

  return (
    <div>
      {SupportRuleNameMap[name]} {OperatorMap[operator]}
      {value}
    </div>
  );
}
