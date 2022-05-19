# mei_tuan_app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

这是一个仿美团网站项目

| 登录账号 | 登录密码 |
| -------- | -------- |
| admin    | admin1   |

# 仿美团项目接口文档

接口根地址:

https://www.fastmock.site/mock/aa83bd4cc0a2b01d07904f02ceea29ad/meituan

## Get,注册验证

> /api/meituan/register

> 返回示例

> 成功

```json
{
  "status": "success",
  "msg": "成功",
  "data": {
    "userName": "admin"
  }
}
```

### 返回结果

| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ---------- | ---- | -------- |
| status | success    | 成功 | Inline   |
|        | fail       | 失败 | Inline   |
|        |            |      |          |

### 返回数据结构

状态码 **200**

| 名称     | 类型   | 必选 | 约束 | 说明 |
| -------- | ------ | ---- | ---- | ---- |
| » status | string | true | none | none |
| » msg    | string | true | none | none |
| »» data  | Object | true | none |      |

## GET 登陆接口

> /api/meituan/login

> query 请求参数:

```yaml
userName: admin
passWord: admin
```

### 请求参数

| 名称       | 位置  | 类型   | 必选 | 说明   |
| ---------- | ----- | ------ | ---- | ------ |
| query      | query | object | 否   | none   |
| » userName | query | string | 是   | 用户名 |
| » passWord | query | string | 是   | 密码   |

> 返回示例

> 成功

```json
{
  code: "200",
  em: "success",
  data: {
    userInfo: {
          username: "admin",
          password: "123456",
        };
    },
};
```

### 返回结果

| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ---------- | ---- | -------- |
| 200    | 成功       | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称    | 类型    | 必选 | 约束 | 说明     |
| ------- | ------- | ---- | ---- | -------- |
| » code  | integer | true | none | none     |
| » em    | string  | true | none | none     |
| »» data | Object  | true | none | 用户信息 |

## Get 获取当前地理位置信息

> /api/meituan/city/getPosition

> 返回示例

> 成功

```json
{
  "status": "success",
  "msg": "成功",
  "data": {
    "id": 20,
    "name": "河北",
    "pinyin": "hebei",
    "acronvm": "hb",
    "rank": "H",
    "firstChar": "h",
    "nearCity": [
      {
        "id": 76,
        "name": "石家庄",
        "pinyin": "shijiazhuang",
        "acronym": "sjz",
        "rank": "B",
        "firstChar": "S"
      },
      {
        "id": 84,
        "name": "保定",
        "pinyin": "baoding",
        "acronym": "bd",
        "rank": "C",
        "firstChar": "B"
      },
      {
        "id": 106,
        "name": "邯郸",
        "pinyin": "langfang",
        "acronym": "lf",
        "rank": "D",
        "firstChar": "L"
      }
    ]
  }
}
```

### 返回结果

| 状态   | 状态码含义 | 说明 |        |
| ------ | ---------- | ---- | ------ |
| sucess | 成功       | 成功 | Inline |

## GET 获取省份列表

> /api/meituan/city/province

> 返回示例

> 成功

```json
{
  'status': 'success',
  'msg': '成功',
  "data": [{
      "provinceCode": "370000",
      "provinceName": "山东",
      "cityInfoList": [{
          "id": 60,
          "name": "青岛",
          "pinyin": "qingdao",
          "acronym": "qd",
          "rank": "B",
          "firstChar": "Q"
        },
		{...}
      ]
    },
}
```

### 返回结果

| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ---------- | ---- | -------- |
| status | 成功       | 成功 | Inline   |

## GET 最近搜索城市

> /api/meituan/city/recents

> 返回实例

> 成功

```json
{
  'status': 'success',
  'msg':'成功',
  "data":[
    {
        "id": 1,
        "name": "北京",
        "pinyin": "beijing",
        "acronym": "bj",
        "rank": "S",
        "firstChar": "B"
      },
      {...}
  ]
}
```

### 返回结果

| 状态码  | 状态码含义 | 说明 | 数据模型 |
| ------- | ---------- | ---- | -------- |
| success | 成功       | 成功 | Inline   |

## GET 获取热门城市

> /api/meituan/city/hot

> 返回实例

> 成功

```json
{
  'status': 'success',
  'msg':'成功',
  "data":[
    {
        "id": 1,
        "name": "北京",
        "pinyin": "beijing",
        "acronym": "bj",
        "rank": "S",
        "firstChar": "B"
      },
      {...}
  ]
}
```

### 返回结果

| 状态码  | 状态码含义 | 说明 | 数据模型 |
| ------- | ---------- | ---- | -------- |
| success | 成功       | 成功 | Inline   |

## GET 产品展示列表数据获取

> /api/meituan/list/goodsList

> 返回实例

> 成功

```json
{
  'status': 'success',
  'msg':'成功',
  data:[{
    'image': 'https://p1.meituan.net/ugcpic/a0aaa22713c14de64a018952789ca581@272w_154h_1e_1c',
    title: "火鸡老店",
    type: "food",
    score: 4.1,
    commentNum: 0,
    comment: [{
      username: 'xxx',
      evalaute: "好吃"
    }],
    tab: ['火锅', '沙河'],
    address: '昌平区小汤山尚信村沿温榆河畔北岸向西3.5公里',
    'avg_price': 64,
    'deal_items': [{
      'title': '火鸡宴,建议10-14人使用',
      'price': '909',
      'counter_price': 1150,
      'saleNum': 0,
      "price_type": "元"
    }]
  },
```

### 返回结果

| 状态码  | 状态码含义 | 说明 | 数据模型 |
| ------- | ---------- | ---- | -------- |
| success | 成功       | 成功 | Inline   |

## GET 首页下方，有格调内容区数据获取

> /api/meituan/index/resultByKeywords

> 返回实例

> 成功

```json
{
  'status': 'success',
  'msg':'成功',
  data: [
        {
          image: 'https://img.meituan.net/phoenix/2c119b60b48798fc5ade513308aead0b2735823.jpg@740w_416h_1e_1c',
          title: 'N1糖果治愈/VIP私人影院/电动床垫/自助入住/可做饭餐具齐/西青大学城/姚村夜市',
          sub_title: '整套1居室·可住3人 | 西青大学城',
          price_info: {
            current_price: 100,
            old_price: 36,
            avg_price: null,
            unit: null,
          },
          rentNum: 10,
          address: '崇文门',
        },
      	{...}
   ]
}
```

### 返回结果

| 状态码  | 状态码含义 | 说明 | 数据模型 |
| ------- | ---------- | ---- | -------- |
| success | 成功       | 成功 | Inline   |

## GET 首页导航数据

> /api/meituan/index/nav

> 返回实例

> 成功

```json
{
  "status": 'success',
  'msg': "成功",
  "data": [
      {
          name: '外卖',
          type: 'hc-icon-waimaiNew',
          items: [
              {
                  title: '外卖',
                  items: ['美团外卖'],
              },
          ],
      },
      {
          name: '酒店',
          type: 'hc-icon-hotelNew',
          items: [
              {
                  title: '酒店星级',
                  items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星'],
              },
          ],
      },
      {...}
  ]
}
```

### 返回结果

| 状态码  | 状态码含义 | 说明 | 数据模型 |
| ------- | ---------- | ---- | -------- |
| success | 成功       | 成功 | Inline   |

## GET 搜索框列表数据获取

> /api/meituan/header/search

> 返回实例

> 成功

```json
{
  "msg": "成功",
  "status": "success",
  "data": {
    "list": ["火锅", "海鲜", "火锅自助", "海鲜自助", "东北铁锅炖"]
  }
}
```

### 返回结果

| 状态码  | 状态码含义 | 说明 | 数据模型                  |
| ------- | ---------- | ---- | ------------------------- |
| success | 成功       | 成功 | Inline## GET 最近搜索城市 |

## GET 搜索框列表热门数据获取

> /api/meituan/header/searchHotWords

> 返回实例

> 成功

```json
{
  "msg": "成功",
  "status": "success",
  "data": ["故宫博物院", "北京欢乐谷", "故宫珍宝馆", "尚隐·泉都市生活馆", "八达岭长城", "北京连升商务酒店"]
}
```

### 返回结果

| 状态码  | 状态码含义 | 说明 | 数据模型 |
| ------- | ---------- | ---- | -------- |
| success | 成功       | 成功 | Inline   |
