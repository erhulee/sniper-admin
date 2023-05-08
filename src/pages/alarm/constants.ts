import { AlarmOperator, SupportRuleName } from "@/api/types/buzzer";

export const SupportRuleNameMap = {
    [SupportRuleName.JS_ERROR]: "JS错误个数",
    [SupportRuleName.RESOURCE_ERROR]: "静态资源错误个数",
    [SupportRuleName.LCP]: "LCP Bad个数",
    [SupportRuleName.FID]: "FID Bad个数",
    [SupportRuleName.TTFB]: "TTFB Bad个数",
    [SupportRuleName.CLS]: "CLS Bad个数",
    [SupportRuleName.FCP]: "FCP Bad个数",
};

export const OperatorMap = {
    [AlarmOperator.bg]: ">",
    [AlarmOperator.eq]: "=",
    [AlarmOperator.ls]: "<",
};


export const conditionOptions = [
    {
        label: "错误异常",
        options: [
            { label: "JS错误", value: SupportRuleName.JS_ERROR },
            { label: "资源错误", value: SupportRuleName.RESOURCE_ERROR },
        ],
    },
    {
        label: "性能异常",
        options: [
            { label: "FCP", value: SupportRuleName.FCP },
            { label: "TTFB", value: SupportRuleName.TTFB },
            { label: "CLS", value: SupportRuleName.CLS },
            { label: "FID", value: SupportRuleName.FID },
            { label: "LCP", value: SupportRuleName.LCP },
        ],
    },
];

export const operator = [
    {
        label: ">",
        value: AlarmOperator.bg,
    },
    {
        label: "=",
        value: AlarmOperator.eq,
    },
    {
        label: "<",
        value: AlarmOperator.ls,
    },
];
