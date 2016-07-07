# csskit
css library with sass

```sass

// 重置
@import "base/reset";

// 浮动
@import "base/clearfix";
@import "base/float";

// 文本
@import "base/text-align";
@import "base/text-select";

// 边框
@import "base/border";

// 分组
@import "base/group";

// 图标
@import "base/icon";

// 尺寸
@import "base/pad";
@import "base/font-size";
@import "base/square";
@import "base/size";

// 颜色
@import "base/theme";


```


mixin     函数
common    通用
component 组件

单体
    按钮
    图标

分组
    group-row
        group-title     列表标题
        group-item      列表项
        group-divider   列表分割
    应用
        btn-group  按钮
        tab-group  标签
        nav-group  导航
        menu-group 菜单
容器
panel
    panel-header
    panel-body
    panel-footer

弹出
    dropdown
    popup
    tooltip
    model

布局
主题

表单
    
    Button          按钮
    Radio           单选
    Checkbox        多选
    Select          选择
    Input           输入

    Switch          开关
    Rate            评分
    DateTimePicker  日期时间选择
    Cascader        级联选择
    Slider          滑动
    Upload          上传


#### 目录结构

    functions               函数库
    mixins                  功能库
    components              组件库
        reset               重置
        base                全局单体
    exports                 输出


------------------------------- ant

基础
    
    Button          按钮
    Icon            图标
    Layout          布局

表单

    Checkbox        多选框
    Cascader        级联选择
    DatePicker      日期选择框
    Form            表单
    InputNumber     数字输入框
    Input           输入框
    Radio           单选框
    Rate            评分
    Select          选择器
    Slider          滑动输入条
    Switch          开关
    TreeSelect      树选择
    TimePicker      时间选择框
    Transfer        穿梭框
    Upload          上传

视图

    Alert           警告提示
    Badge           徽标数
    Calendar        日历
    Card            卡片
    Carousel        走马灯
    Collapse        折叠面板
    Dropdown        下拉菜单
    Modal           对话框
    Message         全局提示
    Notification    通知提醒框
    Popover         气泡卡片
    Progress        进度条
    Popconfirm      气泡确认框
    Table           表格
    Tag             标签
    Timeline        时间轴
    Tooltip         文字提示
    Tree            树形控件

导航

    Breadcrumb      面包屑
    Menu            导航菜单
    Pagination      分页
    Steps           步骤条
    Tabs            标签页

其他

    Affix           固钉
    BackTop         置顶
    LocaleProvider  国际化
    QueueAnim       进出场动画
    Spin            加载中