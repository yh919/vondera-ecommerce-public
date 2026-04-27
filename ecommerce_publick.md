---
title: Default module
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# Default module

### Delete Customer Wishlist

This endpoint is used to remove a product from the customer's wishlist.

#### Request Body

- `productId` (string, required): The ID of the product to be removed from the wishlist.
    

#### Response

The response is in JSON format and follows the schema below:

``` json
{
    "type": "object",
    "properties": {
        "status": {
            "type": "number"
        },
        "message": {
            "type": "string"
        },
        "data": {
            "type": ["object", "null"]
        }
    }
}

 ```

The response contains the following properties:

- `status` (number): The status code of the response.
    
- `message` (string): A message related to the response status.
    
- `data` (object or null): Additional data related to the response, or null if no data is present.
    

#### Example Response

``` json
{
    "status": 0,
    "message": "",
    "data": null
}

 ```

Base URLs:

# Authentication

- HTTP Authentication, scheme: bearer

# Ecommerce

## GET Get Store

GET /store/

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Origin|header|string| no |none|
|language|header|string| yes |none|
|link|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": "W9DhSs7ZbZc9czcsYMr0WtqOCdy2",
    "enabled": true,
    "isCommingSoon": false,
    "siteReady": true,
    "name": "QAF",
    "merchantId": "qaf",
    "logo": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/33168834/10355b43-c9b3-4d9b-b3bb-f65c29918eb4.jpeg",
    "slogan": "Live outside boundries",
    "country": "EG",
    "curreny": "EGP",
    "domains": [
      "https://qaf.vondera.io"
    ],
    "countries": [
      {
        "country": "EG",
        "isCurrent": true,
        "domain": "https://qaf.vondera.io",
        "currency": "EGP",
        "flag": "https://flagcdn.com/w40/eg.png"
      },
      {
        "country": "SA",
        "isCurrent": false,
        "domain": "https://qaf-sa.vondera.io",
        "currency": "EGP",
        "flag": "https://flagcdn.com/w40/sa.png"
      },
      {
        "country": "JO",
        "isCurrent": false,
        "domain": "https://qaf-jo.vondera.io",
        "currency": "EGP",
        "flag": "https://flagcdn.com/w40/jo.png"
      }
    ],
    "isWebsiteExpired": false,
    "counters": {
      "products": 180,
      "orders": 0,
      "reviews": 0
    },
    "themeing": {
      "favIcon": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/14277583/e4886318-7a24-4af4-98fe-363783490c61.jpeg",
      "hasCustomBuilder": true,
      "themeId": 12,
      "fontId": 15,
      "navbarId": 0,
      "websiteLanguage": [
        "en",
        "ar"
      ],
      "watermark": false,
      "showMultiCountryDropDown": true,
      "primaryColor": "#c2d62d",
      "secondaryColor": "#000000",
      "bgColor": "#FFFFFF",
      "buttonBgColor": "#000000",
      "buttonTextColor": "#FFFFFF",
      "footerBgColor": "#FFFFFF",
      "footerTextColor": "#000000",
      "floatingBgColor": "#c2d62d",
      "listBannerBgColor": "#bcbcbc",
      "listBannerTextColor": "#272727",
      "productTextColor": "#000000",
      "productImageBgColor": "#FFFFFF",
      "logoSize": "lg",
      "imagesMode": "contain-default",
      "showCustomPagesInHeader": false,
      "whatsappButton": true,
      "floatButton": {
        "active": true,
        "type": 2,
        "url": "https://www.instagram.com/qotoofs?igsh=MWVhNmF3eTh0b2s5ZQ=="
      },
      "listCover": [
        "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/jr5WN92TbYgzG4Ll5GEYUvLKULV2/list-covers/f05604fc-ad76-42f1-b42a-a1a8ee8deacc.jpeg",
        "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/gallery/fd4ef114-dd85-4ec1-b2e8-7199854d8618.jpeg"
      ],
      "listBanners": [
        "We Are Back ",
        "A lot of Discounts for our family "
      ],
      "lastPiece": false,
      "cartStyle": "PAGE",
      "minOrderAmount": 0,
      "askForAddress": false,
      "requireEmail": true,
      "prePaidProducts": false,
      "reviewsEnabled": true,
      "customerAccountsEnabled": true,
      "canSingleCheckout": true,
      "showRemainingQuantity": true,
      "popUpMessage": {
        "isEnabled": false,
        "title": "",
        "body": "",
        "buttonText": "",
        "buttonType": "NONE",
        "buttonUrl": ""
      }
    },
    "features": {
      "expansesAccess": true,
      "productsOffersAccess": true,
      "funnelsAccess": true,
      "popUpAccess": true,
      "customPagesAccess": true,
      "pixelAccess": true,
      "removeBrandingAccess": true,
      "orderRiskSystemAccess": true,
      "apiAccess": true,
      "customSEO": true,
      "vInboxAccess": true,
      "multiCountryAccess": true,
      "liveViewAccess": true,
      "teamMembersCount": 15,
      "customerManagmentLevel": 3,
      "gatewaysLevel": 2,
      "shippingLevel": 2,
      "builderLevel": 3,
      "domainManagmentLevel": 2,
      "analyticsLevel": 3,
      "monthlyEmailsLimit": 1000,
      "abandonCartsAccess": true,
      "mailCampaignsAccess": true,
      "customSalesChannels": true,
      "catalogAccess": true,
      "vonderaAiAccess": true,
      "expansesLevel": 3,
      "currentOrders": 0,
      "maxOrders": 0
    },
    "checkOutSettings": {
      "showEmailField": true,
      "showAltPhone": true,
      "addressFormStyle": "FULL",
      "checkOutButtonText": "",
      "checkOutStyle": 0,
      "successMessageText": "Kindly confirm your order\nYou’ll receive a WhatsApp message to confirm. Please make sure your number is correct so we can process your order smoothly.\nمن فضلك أكد طلب\nهيوصلك رسالة على واتساب للتأكيد. اتأكد إن رقمك صحيح علشان نقدر نجهز طلبك بكل سهولة",
      "checkOutNote": "Kindly confirm your order\nYou’ll receive a WhatsApp message to confirm. Please make sure your number is correct so we can process your order smoothly.\nمن فضلك أكد طلب\nهيوصلك رسالة على واتساب للتأكيد. اتأكد إن رقمك صحيح علشان نقدر نجهز طلبك بكل سهولة"
    },
    "social": {
      "phone": "+201070068385",
      "instagram": "instagram.com",
      "facebook": "https://facebook.com/profile.php?id=100095533744557&mibextid=ZbWKwL",
      "tiktok": ""
    },
    "pixels": {
      "facebookPixel": "",
      "tiktok": "",
      "googleTagManager": "GTM-347934",
      "snapshat": ""
    },
    "pikcupMethods": {
      "shipping": true,
      "pickup": true
    },
    "collecting": {
      "depositOptions": {
        "active": true,
        "type": "percent",
        "value": 10
      },
      "cardOptions": {
        "gateway": "vpay",
        "enabled": true
      },
      "cashEnabled": true
    },
    "extraPages": [
      {
        "id": "testast",
        "title": "عربييييي",
        "link": "https://qaf.vondera.io/pages/testast"
      },
      {
        "id": "policy",
        "title": "شسيشسي",
        "link": "https://qaf.vondera.io/pages/policy"
      },
      {
        "id": "test",
        "title": "Test",
        "link": "https://qaf.vondera.io/pages/test"
      },
      {
        "id": "trst",
        "title": "testttttt1",
        "link": "https://qaf.vondera.io/pages/trst"
      },
      {
        "id": "fdsfdsfdsf",
        "title": "title English default",
        "link": "https://qaf.vondera.io/pages/fdsfdsfdsf"
      },
      {
        "id": "testoto",
        "title": "تيست",
        "link": "https://qaf.vondera.io/pages/testoto"
      }
    ],
    "zones": [
      {
        "id": "361059",
        "name": "Alexandria",
        "fees": 50,
        "enabled": true,
        "estimatedDeliveryTimeInDays": 0
      },
      {
        "id": "359781",
        "name": "Asyut",
        "fees": 0,
        "enabled": true,
        "estimatedDeliveryTimeInDays": 0
      },
      {
        "id": "359171",
        "name": "Beni Suweif",
        "fees": 0,
        "enabled": true,
        "estimatedDeliveryTimeInDays": 0
      },
      {
        "id": "360631",
        "name": "Cairo",
        "fees": 0,
        "enabled": true,
        "estimatedDeliveryTimeInDays": 0
      }
    ],
    "currency": "EGP",
    "seoData": {
      "entityId": "W9DhSs7ZbZc9czcsYMr0WtqOCdy2",
      "entityType": "store",
      "slug": "/",
      "seo": {
        "title": "تيست",
        "description": "نشساينشت",
        "keywords": [
          "نتشساينم",
          "شسيانتشاسنيت",
          "شسينتشاسنيتشس"
        ],
        "allowIndexing": true,
        "canonicalUrl": "https://qaf.vondera.io"
      },
      "social": {
        "ogTitle": "",
        "ogDescription": "",
        "ogImage": "",
        "twitterTitle": "",
        "twitterDescription": "",
        "twitterImage": ""
      },
      "customHeadHtml": ""
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» enabled|boolean|true|none||none|
|»» isCommingSoon|boolean|true|none||none|
|»» siteReady|boolean|true|none||none|
|»» name|string|true|none||none|
|»» merchantId|string|true|none||none|
|»» logo|string|true|none||none|
|»» slogan|string|true|none||none|
|»» country|string|true|none||none|
|»» curreny|string|true|none||none|
|»» domains|[string]|true|none||none|
|»» countries|[object]|true|none||none|
|»»» country|string|true|none||none|
|»»» isCurrent|boolean|true|none||none|
|»»» domain|string|true|none||none|
|»»» currency|string|true|none||none|
|»»» flag|string|true|none||none|
|»» isWebsiteExpired|boolean|true|none||none|
|»» counters|object|true|none||none|
|»»» products|integer|true|none||none|
|»»» orders|integer|true|none||none|
|»»» reviews|integer|true|none||none|
|»» themeing|object|true|none||none|
|»»» favIcon|string|true|none||none|
|»»» hasCustomBuilder|boolean|true|none||none|
|»»» themeId|integer|true|none||none|
|»»» fontId|integer|true|none||none|
|»»» navbarId|integer|true|none||none|
|»»» websiteLanguage|[string]|true|none||none|
|»»» watermark|boolean|true|none||none|
|»»» showMultiCountryDropDown|boolean|true|none||none|
|»»» primaryColor|string|true|none||none|
|»»» secondaryColor|string|true|none||none|
|»»» bgColor|string|true|none||none|
|»»» buttonBgColor|string|true|none||none|
|»»» buttonTextColor|string|true|none||none|
|»»» footerBgColor|string|true|none||none|
|»»» footerTextColor|string|true|none||none|
|»»» floatingBgColor|string|true|none||none|
|»»» listBannerBgColor|string|true|none||none|
|»»» listBannerTextColor|string|true|none||none|
|»»» productTextColor|string|true|none||none|
|»»» productImageBgColor|string|true|none||none|
|»»» logoSize|string|true|none||none|
|»»» imagesMode|string|true|none||none|
|»»» showCustomPagesInHeader|boolean|true|none||none|
|»»» whatsappButton|boolean|true|none||none|
|»»» floatButton|object|true|none||none|
|»»»» active|boolean|true|none||none|
|»»»» type|integer|true|none||none|
|»»»» url|string|true|none||none|
|»»» listCover|[string]|true|none||none|
|»»» listBanners|[string]|true|none||none|
|»»» lastPiece|boolean|true|none||none|
|»»» cartStyle|string|true|none||none|
|»»» minOrderAmount|integer|true|none||none|
|»»» askForAddress|boolean|true|none||none|
|»»» requireEmail|boolean|true|none||none|
|»»» prePaidProducts|boolean|true|none||none|
|»»» reviewsEnabled|boolean|true|none||none|
|»»» customerAccountsEnabled|boolean|true|none||none|
|»»» canSingleCheckout|boolean|true|none||none|
|»»» showRemainingQuantity|boolean|true|none||none|
|»»» popUpMessage|object|true|none||none|
|»»»» isEnabled|boolean|true|none||none|
|»»»» title|string|true|none||none|
|»»»» body|string|true|none||none|
|»»»» buttonText|string|true|none||none|
|»»»» buttonType|string|true|none||none|
|»»»» buttonUrl|string|true|none||none|
|»» features|object|true|none||none|
|»»» expansesAccess|boolean|true|none||none|
|»»» productsOffersAccess|boolean|true|none||none|
|»»» funnelsAccess|boolean|true|none||none|
|»»» popUpAccess|boolean|true|none||none|
|»»» customPagesAccess|boolean|true|none||none|
|»»» pixelAccess|boolean|true|none||none|
|»»» removeBrandingAccess|boolean|true|none||none|
|»»» orderRiskSystemAccess|boolean|true|none||none|
|»»» apiAccess|boolean|true|none||none|
|»»» customSEO|boolean|true|none||none|
|»»» vInboxAccess|boolean|true|none||none|
|»»» multiCountryAccess|boolean|true|none||none|
|»»» liveViewAccess|boolean|true|none||none|
|»»» teamMembersCount|integer|true|none||none|
|»»» customerManagmentLevel|integer|true|none||none|
|»»» gatewaysLevel|integer|true|none||none|
|»»» shippingLevel|integer|true|none||none|
|»»» builderLevel|integer|true|none||none|
|»»» domainManagmentLevel|integer|true|none||none|
|»»» analyticsLevel|integer|true|none||none|
|»»» monthlyEmailsLimit|integer|true|none||none|
|»»» abandonCartsAccess|boolean|true|none||none|
|»»» mailCampaignsAccess|boolean|true|none||none|
|»»» customSalesChannels|boolean|true|none||none|
|»»» catalogAccess|boolean|true|none||none|
|»»» vonderaAiAccess|boolean|true|none||none|
|»»» expansesLevel|integer|true|none||none|
|»»» currentOrders|integer|true|none||none|
|»»» maxOrders|integer|true|none||none|
|»» checkOutSettings|object|true|none||none|
|»»» showEmailField|boolean|true|none||none|
|»»» showAltPhone|boolean|true|none||none|
|»»» addressFormStyle|string|true|none||none|
|»»» checkOutButtonText|string|true|none||none|
|»»» checkOutStyle|integer|true|none||none|
|»»» successMessageText|string|true|none||none|
|»»» checkOutNote|string|true|none||none|
|»» social|object|true|none||none|
|»»» phone|string|true|none||none|
|»»» instagram|string|true|none||none|
|»»» facebook|string|true|none||none|
|»»» tiktok|string|true|none||none|
|»» pixels|object|true|none||none|
|»»» facebookPixel|string|true|none||none|
|»»» tiktok|string|true|none||none|
|»»» googleTagManager|string|true|none||none|
|»»» snapshat|string|true|none||none|
|»» pikcupMethods|object|true|none||none|
|»»» shipping|boolean|true|none||none|
|»»» pickup|boolean|true|none||none|
|»» collecting|object|true|none||none|
|»»» depositOptions|object|true|none||none|
|»»»» active|boolean|true|none||none|
|»»»» type|string|true|none||none|
|»»»» value|integer|true|none||none|
|»»» cardOptions|object|true|none||none|
|»»»» gateway|string|true|none||none|
|»»»» enabled|boolean|true|none||none|
|»»» cashEnabled|boolean|true|none||none|
|»» extraPages|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» title|string|true|none||none|
|»»» link|string|true|none||none|
|»» zones|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» name|string|true|none||none|
|»»» fees|integer|true|none||none|
|»»» enabled|boolean|true|none||none|
|»»» estimatedDeliveryTimeInDays|integer|true|none||none|
|»» currency|string|true|none||none|
|»» seoData|object|true|none||none|
|»»» entityId|string|true|none||none|
|»»» entityType|string|true|none||none|
|»»» slug|string|true|none||none|
|»»» seo|object|true|none||none|
|»»»» title|string|true|none||none|
|»»»» description|string|true|none||none|
|»»»» keywords|[string]|true|none||none|
|»»»» allowIndexing|boolean|true|none||none|
|»»»» canonicalUrl|string|true|none||none|
|»»» social|object|true|none||none|
|»»»» ogTitle|string|true|none||none|
|»»»» ogDescription|string|true|none||none|
|»»»» ogImage|string|true|none||none|
|»»»» twitterTitle|string|true|none||none|
|»»»» twitterDescription|string|true|none||none|
|»»»» twitterImage|string|true|none||none|
|»»» customHeadHtml|string|true|none||none|

## POST Refferal

POST /store/referral

> Body Parameters

```json
{
  "referrer": "instagram",
  "source": "social",
  "medium": "organic",
  "campaign": "summer_sale",
  "content": "story_link",
  "term": "discount_shoes",
  "ipAddress": "192.168.1.1",
  "aff": "shreif"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Origin|header|string| no |none|
|body|body|object| no |none|
|» referrer|body|string| yes |none|
|» source|body|string| yes |none|
|» medium|body|string| yes |none|
|» campaign|body|string| yes |none|
|» content|body|string| yes |none|
|» term|body|string| yes |none|
|» ipAddress|body|string| yes |none|
|» aff|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "enabled": true,
    "id": "lcvPuRAIVVUnRcZpttlPsRPLqoY2",
    "name": "Qotoofs",
    "logo": "https://vondera-bucket.s3.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/avatar.jpg",
    "slogan": "Live outside Boundaries.. ",
    "country": "EG",
    "curreny": "EGP",
    "domains": [
      "https://qotoofs.vondera.shop",
      "https://qotoofs.com"
    ],
    "themeing": {
      "floatingBgColor": "#000000",
      "customerAccountsEnabled": true,
      "listBanners": [
        "Summer DROP ! 💭"
      ],
      "listCover": [
        "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/cover//4782F315-97DD-488D-9F43-8D0F6B283AD6.jpg",
        "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/cover//B9C2EF70-18BE-493E-97F8-D0CC772F41DE.jpg"
      ],
      "sendEmailToCustomer": true,
      "whatsappButton": true,
      "requireEmail": true,
      "reviewsEnabled": true,
      "prePaidProducts": true,
      "askForAddress": true,
      "lastPiece": true,
      "productTextColor": "#000000",
      "bgColor": "#FFFFFF",
      "listBannerBgColor": "#bcbcbc",
      "footerBgColor": "#FFFFFF",
      "footerTextColor": "#000000",
      "listBannerTextColor": "#272727",
      "productImageBgColor": "#FFFFFF",
      "primaryColor": "#FFFFFF",
      "secondaryColor": "#000000",
      "canSingleCheckout": false,
      "minOrderAmount": 0,
      "fontId": 11,
      "buttonTextColor": "#FFFFFF",
      "buttonBgColor": "#000000",
      "themeId": 8
    },
    "features": {
      "couriers": true,
      "whatsapp": true,
      "salesChannels": 20,
      "customReceipt": true,
      "website": true,
      "customPages": true,
      "globalSite": true,
      "payments": true,
      "mailCampaigns": true,
      "siteUsers": true,
      "maxOrders": 24000,
      "abandonCarts": true,
      "freeDomain": true,
      "pixels": true,
      "reviews": true,
      "discounts": true,
      "members": 15,
      "expanses": true,
      "currentOrders": 1
    },
    "covers": [
      "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/cover//4782F315-97DD-488D-9F43-8D0F6B283AD6.jpg",
      "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/cover//B9C2EF70-18BE-493E-97F8-D0CC772F41DE.jpg"
    ],
    "banners": [
      "Summer DROP ! 💭"
    ],
    "depositOptions": {
      "active": false,
      "type": "amount",
      "value": 0
    },
    "areas": [
      {
        "govName": "القاهرة",
        "price": 50
      },
      {
        "govName": "القاهره - مدن جديده",
        "price": 55
      },
      {
        "govName": "الجيزة",
        "price": 50
      },
      {
        "govName": "الإسكندرية",
        "price": 70
      },
      {
        "govName": "القليوبية",
        "price": 70
      },
      {
        "govName": "الإسماعيلية",
        "price": 70
      },
      {
        "govName": "أسيوط",
        "price": 90
      },
      {
        "govName": "البحر الأحمر",
        "price": 110
      },
      {
        "govName": "البحيرة",
        "price": 70
      },
      {
        "govName": "بني سويف",
        "price": 90
      },
      {
        "govName": "جنوب سيناء",
        "price": 110
      },
      {
        "govName": "الدقهلية",
        "price": 70
      },
      {
        "govName": "دمياط",
        "price": 70
      },
      {
        "govName": "سوهاج",
        "price": 90
      },
      {
        "govName": "السويس",
        "price": 70
      },
      {
        "govName": "الشرقية",
        "price": 70
      },
      {
        "govName": "شمال سيناء",
        "price": 110
      },
      {
        "govName": "الغربية",
        "price": 70
      },
      {
        "govName": "الفيوم",
        "price": 90
      },
      {
        "govName": "قنا",
        "price": 90
      },
      {
        "govName": "كفر الشيخ",
        "price": 70
      },
      {
        "govName": "مطروح",
        "price": 110
      },
      {
        "govName": "المنوفية",
        "price": 70
      },
      {
        "govName": "المنيا",
        "price": 90
      },
      {
        "govName": "أسوان",
        "price": 90
      },
      {
        "govName": "الأقصر",
        "price": 90
      },
      {
        "govName": "الوادي الجديد",
        "price": 90
      },
      {
        "govName": "بورسعيد",
        "price": 70
      }
    ],
    "pixels": {
      "googleTagManager": "GTM-TL42N8B4",
      "facebookPixel": "283056211504603",
      "tiktok": "",
      "snapshat": ""
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» enabled|boolean|true|none||none|
|»» id|string|true|none||none|
|»» name|string|true|none||none|
|»» logo|string|true|none||none|
|»» slogan|string|true|none||none|
|»» country|string|true|none||none|
|»» curreny|string|true|none||none|
|»» domains|[string]|true|none||none|
|»» themeing|object|true|none||none|
|»»» floatingBgColor|string|true|none||none|
|»»» customerAccountsEnabled|boolean|true|none||none|
|»»» listBanners|[string]|true|none||none|
|»»» listCover|[string]|true|none||none|
|»»» sendEmailToCustomer|boolean|true|none||none|
|»»» whatsappButton|boolean|true|none||none|
|»»» requireEmail|boolean|true|none||none|
|»»» reviewsEnabled|boolean|true|none||none|
|»»» prePaidProducts|boolean|true|none||none|
|»»» askForAddress|boolean|true|none||none|
|»»» lastPiece|boolean|true|none||none|
|»»» productTextColor|string|true|none||none|
|»»» bgColor|string|true|none||none|
|»»» listBannerBgColor|string|true|none||none|
|»»» footerBgColor|string|true|none||none|
|»»» footerTextColor|string|true|none||none|
|»»» listBannerTextColor|string|true|none||none|
|»»» productImageBgColor|string|true|none||none|
|»»» primaryColor|string|true|none||none|
|»»» secondaryColor|string|true|none||none|
|»»» canSingleCheckout|boolean|true|none||none|
|»»» minOrderAmount|integer|true|none||none|
|»»» fontId|integer|true|none||none|
|»»» buttonTextColor|string|true|none||none|
|»»» buttonBgColor|string|true|none||none|
|»»» themeId|integer|true|none||none|
|»» features|object|true|none||none|
|»»» couriers|boolean|true|none||none|
|»»» whatsapp|boolean|true|none||none|
|»»» salesChannels|integer|true|none||none|
|»»» customReceipt|boolean|true|none||none|
|»»» website|boolean|true|none||none|
|»»» customPages|boolean|true|none||none|
|»»» globalSite|boolean|true|none||none|
|»»» payments|boolean|true|none||none|
|»»» mailCampaigns|boolean|true|none||none|
|»»» siteUsers|boolean|true|none||none|
|»»» maxOrders|integer|true|none||none|
|»»» abandonCarts|boolean|true|none||none|
|»»» freeDomain|boolean|true|none||none|
|»»» pixels|boolean|true|none||none|
|»»» reviews|boolean|true|none||none|
|»»» discounts|boolean|true|none||none|
|»»» members|integer|true|none||none|
|»»» expanses|boolean|true|none||none|
|»»» currentOrders|integer|true|none||none|
|»» covers|[string]|true|none||none|
|»» banners|[string]|true|none||none|
|»» depositOptions|object|true|none||none|
|»»» active|boolean|true|none||none|
|»»» type|string|true|none||none|
|»»» value|integer|true|none||none|
|»» areas|[object]|true|none||none|
|»»» govName|string|true|none||none|
|»»» price|integer|true|none||none|
|»» pixels|object|true|none||none|
|»»» googleTagManager|string|true|none||none|
|»»» facebookPixel|string|true|none||none|
|»»» tiktok|string|true|none||none|
|»»» snapshat|string|true|none||none|

## GET Get Sitemap

GET /store/sitemap

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Sitemap generated successfully",
  "data": [
    {
      "loc": "https://miniuz-eg.com/",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=308gHRTwPR5n6v55m66y",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=6JGMV9KGC8b6cQWNoSX3",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=7o6Ji34vLPfsUvJzkL0R",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=BTf09c17zxZ1S4tAYgU4",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=FoEfe7lpMe3iZBhuvnKX",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=PMLoSaIteJcPfHnfS0Pb",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=Qkeze4KLLn4yBJJRTa1T",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=aq95cOcRYQJAYfAGb1Pg",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=cjqctfiwZMMuFYoDoVde",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=iqA8vCgOq1mFMDXpgmTH",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=jE3YLI9fYOo0oZR9na4s",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=jMHAOjdjMVLC1nPqw4oF",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=k8TQ8WWk1d8YlwcmVtVC",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=sKtb2vYbL4UPop9V3flu",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/products/all?categoryId=zax17e75dO7PdolshsOQ",
      "changefreq": "weekly",
      "priority": 0.5
    },
    {
      "loc": "https://miniuz-eg.com/product/0416",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/0702",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/1018",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/1025",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/1203",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/1282",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/1466",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/1545",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/1806",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/1919",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2117",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2147",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2173",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2284",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2327",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2474",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2643",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2652",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2695",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/2988",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/3191",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/3251",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/3459",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/3544",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/3553",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/3763",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/3777",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/3849",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/4334",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/4396",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/4405",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/4533",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/4539",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/4668",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/4950",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5084",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5085",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5442",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5455",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5593",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5740",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5840",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5864",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5940",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/5943",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6059",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6183",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6221",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6367",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6503",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6573",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6578",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6836",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6881",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6897",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/6927",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/7505",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/7630",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/7677",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/7797",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/7821",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/7920",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/7962",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/7984",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/8252",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/8307",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/8325",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/8416",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/8910",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/9090",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/9221",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/9298",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/9386",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/9519",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/9603",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/product/9909",
      "changefreq": "weekly",
      "priority": 0.8
    },
    {
      "loc": "https://miniuz-eg.com/pages/whenwasminiz",
      "changefreq": "weekly",
      "priority": 0.3
    },
    {
      "loc": "https://miniuz-eg.com/pages/whoarewe",
      "changefreq": "weekly",
      "priority": 0.3
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» loc|string|true|none||none|
|»» changefreq|string|true|none||none|
|»» priority|number|true|none||none|

## GET Get Funnel

GET /funnels/{linkId}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|linkId|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Funnel retrieved successfully",
  "data": {
    "productId": "19660489",
    "funnelId": "awesome-product-funnel",
    "funnelName": "Awesome Product Funnel",
    "content": "<div style='font-family: Arial; text-align: center;'><h1>My Product Funnel</h1><p>This is an awesome product you should buy!</p><button style='background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px;'>Buy Now</button></div>"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» productId|string|true|none||none|
|»» funnelId|string|true|none||none|
|»» funnelName|string|true|none||none|
|»» content|string|true|none||none|

## GET Get Builder Settings

GET /store/builder/settings

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|withDraft|query|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Builder settings fetched successfully",
  "data": {
    "updatedAt": "2026-01-08T09:11:00.153Z",
    "sections": [
      {
        "enabled": true,
        "settings": {
          "padding": {
            "tablet": {
              "unit": "px",
              "top": 0,
              "left": 0,
              "bottom": 0,
              "right": 0
            },
            "mobile": {
              "left": 0,
              "bottom": 0,
              "top": 0,
              "unit": "px",
              "right": 0
            },
            "desktop": {
              "right": 0,
              "left": 0,
              "bottom": 0,
              "top": 0,
              "unit": "px"
            }
          },
          "advanced": {
            "rotatingHeadline": {
              "words": [],
              "enabled": false
            },
            "deviceVisibility": {
              "desktop": true,
              "mobile": true,
              "tablet": true
            },
            "stickyMobileCTA": true,
            "scrollIndicator": true,
            "countdownTimer": {
              "text": "Sale ends in",
              "enabled": true,
              "endDate": "2024-12-31T23:59:59Z"
            }
          },
          "content": {
            "secondaryCTA": {
              "enabled": true,
              "link": "/about",
              "style": "outline",
              "text": "Learn More"
            },
            "primaryCTA": {
              "style": "filled",
              "link": "/products",
              "text": "Shop Now"
            },
            "headline": "Welcome to Our Premium Store",
            "textColor": "#ffffff",
            "textAlignment": "center",
            "supportingText": "Discover amazing products with unbeatable quality and service"
          },
          "background": {}
        },
        "order": 0,
        "id": "hero"
      },
      {
        "enabled": true,
        "order": 1,
        "settings": {
          "padding": {
            "mobile": {
              "unit": "px",
              "bottom": 30,
              "top": 30,
              "right": 10,
              "left": 10
            },
            "desktop": {
              "bottom": 60,
              "right": 20,
              "top": 60,
              "left": 20,
              "unit": "px"
            },
            "tablet": {
              "right": 15,
              "bottom": 40,
              "left": 15,
              "unit": "px",
              "top": 40
            }
          },
          "advanced": {
            "highlightCollection": {
              "collectionId": "featured-collection-123",
              "enabled": true
            },
            "badges": {
              "showSale": true,
              "showNew": true
            },
            "mobileLayoutOverride": "inherit",
            "manualOrdering": false
          },
          "layout": {},
          "visual": {
            "hoverEffects": "zoom",
            "spacing": 20,
            "productCountVisibility": true
          }
        },
        "id": "collections"
      },
      {
        "settings": {
          "advanced": {
            "quickAddToCart": true,
            "analyticsTracking": true,
            "codBadge": true,
            "lazyLoading": true,
            "stockUrgency": {
              "threshold": 10,
              "enabled": true,
              "message": "Only {count} left!"
            }
          },
          "padding": {
            "tablet": {
              "right": 15,
              "left": 15,
              "bottom": 30,
              "unit": "px",
              "top": 30
            },
            "desktop": {
              "bottom": 40,
              "right": 20,
              "top": 40,
              "unit": "px",
              "left": 20
            },
            "mobile": {
              "left": 10,
              "unit": "px",
              "top": 20,
              "right": 10,
              "bottom": 20
            }
          },
          "display": {
            "showRating": true,
            "showDiscount": true,
            "showPrice": true
          },
          "source": {},
          "layout": {}
        },
        "id": "products",
        "enabled": true,
        "order": 2
      },
      {
        "enabled": true,
        "order": 3,
        "id": "divider",
        "settings": {
          "padding": {
            "mobile": {
              "unit": "px",
              "right": 0,
              "left": 0,
              "bottom": 0,
              "top": 0
            },
            "tablet": {
              "bottom": 0,
              "top": 0,
              "unit": "px",
              "left": 0,
              "right": 0
            },
            "desktop": {
              "top": 0,
              "left": 0,
              "right": 0,
              "bottom": 0,
              "unit": "px"
            }
          },
          "advanced": {
            "animation": {
              "duration": 500,
              "type": "fade",
              "enabled": false
            },
            "responsiveSpacing": {
              "mobile": {
                "marginTop": 0,
                "marginBottom": 0
              },
              "desktop": {
                "marginBottom": 0,
                "marginTop": 0
              },
              "tablet": {
                "marginBottom": 0,
                "marginTop": 0
              }
            }
          },
          "appearance": {
            "marginTop": 0,
            "height": 2,
            "marginBottom": 0,
            "color": "#e0e0e0"
          },
          "style": {}
        }
      },
      {
        "settings": {
          "padding": {
            "tablet": {
              "right": 15,
              "left": 15,
              "bottom": 40,
              "top": 40,
              "unit": "px"
            },
            "mobile": {
              "left": 10,
              "unit": "px",
              "right": 10,
              "bottom": 30,
              "top": 30
            },
            "desktop": {
              "unit": "px",
              "top": 60,
              "right": 20,
              "bottom": 60,
              "left": 20
            }
          },
          "advanced": {
            "animatedEntrance": {
              "type": "fade",
              "duration": 800,
              "enabled": true
            },
            "highlightedWords": [
              {
                "color": "#ff6b6b",
                "word": "quality"
              },
              {
                "color": "#4ecdc4",
                "word": "excellence"
              }
            ],
            "seoHeadingLevel": "h2"
          },
          "styling": {
            "maxWidth": 800,
            "alignment": "center",
            "fontSize": 18,
            "color": "#333333"
          },
          "content": {
            "text": "<h2>Why Choose Us?</h2><p>We offer the best quality products with exceptional customer service. Our commitment to excellence sets us apart.</p>"
          }
        },
        "id": "text",
        "enabled": true,
        "order": 4
      },
      {
        "order": 5,
        "enabled": true,
        "settings": {
          "padding": {
            "mobile": {
              "left": 10,
              "unit": "px",
              "bottom": 30,
              "top": 30,
              "right": 10
            },
            "desktop": {
              "unit": "px",
              "bottom": 50,
              "top": 50,
              "left": 20,
              "right": 20
            },
            "tablet": {
              "top": 40,
              "right": 15,
              "unit": "px",
              "left": 15,
              "bottom": 40
            }
          },
          "content": {
            "items": [
              {
                "description": "On orders over $50",
                "icon": "shipping",
                "color": "#4ecdc4",
                "title": "Free Shipping"
              },
              {
                "icon": "return",
                "color": "#95e1d3",
                "description": "30-day return policy",
                "title": "Easy Returns"
              },
              {
                "title": "24/7 Support",
                "icon": "support",
                "color": "#f38181",
                "description": "We're here to help"
              },
              {
                "description": "100% secure checkout",
                "title": "Secure Payment",
                "color": "#aa96da",
                "icon": "secure"
              }
            ]
          },
          "advanced": {
            "perItemColorControl": true,
            "metricEmphasis": false,
            "hoverAnimation": {
              "enabled": true,
              "type": "lift"
            }
          },
          "layout": {
            "iconSize": 48,
            "columns": 4,
            "alignment": "center"
          }
        },
        "id": "iconsWithText"
      },
      {
        "order": 6,
        "settings": {
          "appearance": {
            "playButtonStyle": "default",
            "aspectRatio": "16:9"
          },
          "advanced": {
            "lazyLoading": true,
            "inlinePlay": false
          },
          "playback": {
            "loop": false,
            "mute": true,
            "autoplay": false
          },
          "padding": {
            "tablet": {
              "right": 15,
              "top": 40,
              "unit": "px",
              "left": 15,
              "bottom": 40
            },
            "mobile": {
              "right": 10,
              "top": 30,
              "unit": "px",
              "bottom": 30,
              "left": 10
            },
            "desktop": {
              "bottom": 60,
              "top": 60,
              "left": 20,
              "unit": "px",
              "right": 20
            }
          },
          "video": {
            "fallbackImage": "https://example.com/images/video-thumbnail.jpg",
            "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          }
        },
        "enabled": true,
        "id": "video"
      },
      {
        "enabled": true,
        "order": 7,
        "settings": {
          "advanced": {
            "internalSearch": false,
            "schemaMarkup": true,
            "highlightedFAQs": []
          },
          "padding": {
            "mobile": {
              "top": 30,
              "bottom": 30,
              "right": 10,
              "left": 10,
              "unit": "px"
            },
            "tablet": {
              "right": 15,
              "top": 40,
              "bottom": 40,
              "unit": "px",
              "left": 15
            },
            "desktop": {
              "unit": "px",
              "left": 20,
              "bottom": 60,
              "top": 60,
              "right": 20
            }
          },
          "content": {
            "items": [
              {
                "answer": "<p>We offer a 30-day return policy on all products. Items must be in original condition with tags attached.</p>",
                "question": "What is your return policy?"
              },
              {
                "question": "Do you offer international shipping?",
                "answer": "<p>Yes, we ship worldwide. Shipping costs and delivery times vary by location.</p>"
              },
              {
                "answer": "<p>Once your order ships, you'll receive a tracking number via email. You can use this to track your package.</p>",
                "question": "How can I track my order?"
              },
              {
                "answer": "<p>We accept all major credit cards, PayPal, and bank transfers.</p>",
                "question": "What payment methods do you accept?"
              }
            ]
          },
          "style": {
            "iconStyle": "plus",
            "defaultOpenItem": 0,
            "accordionStyle": "default"
          }
        },
        "id": "faq"
      },
      {
        "settings": {
          "advanced": {
            "whatsappOptIn": false,
            "autoCouponGeneration": {
              "discountValue": 10,
              "discountType": "percentage",
              "couponCode": "WELCOME10",
              "enabled": true
            },
            "redirectAfterSubmit": {
              "url": null,
              "enabled": false
            },
            "antiSpam": true,
            "crmTagging": {
              "tags": [
                "newsletter",
                "homepage"
              ],
              "enabled": true
            }
          },
          "padding": {
            "tablet": {
              "top": 40,
              "unit": "px",
              "right": 15,
              "left": 15,
              "bottom": 40
            },
            "desktop": {
              "top": 60,
              "bottom": 60,
              "right": 20,
              "left": 20,
              "unit": "px"
            },
            "mobile": {
              "left": 10,
              "top": 30,
              "unit": "px",
              "right": 10,
              "bottom": 30
            }
          },
          "form": {}
        },
        "enabled": true,
        "id": "forms",
        "order": 8
      },
      {
        "order": 9,
        "settings": {
          "advanced": {
            "autoScroll": {
              "direction": "left",
              "speed": 5000,
              "enabled": true
            },
            "tooltips": true,
            "clickableLogos": true
          },
          "layout": {},
          "content": {
            "logos": [
              {
                "image": "https://example.com/logos/partner1.png",
                "link": "https://partner1.com",
                "name": "Partner 1"
              },
              {
                "link": "https://partner2.com",
                "name": "Partner 2",
                "image": "https://example.com/logos/partner2.png"
              }
            ]
          },
          "padding": {
            "mobile": {
              "right": 10,
              "bottom": 20,
              "left": 10,
              "top": 20,
              "unit": "px"
            },
            "tablet": {
              "unit": "px",
              "left": 15,
              "right": 15,
              "bottom": 30,
              "top": 30
            },
            "desktop": {
              "bottom": 40,
              "top": 40,
              "unit": "px",
              "right": 20,
              "left": 20
            }
          }
        },
        "id": "partners",
        "enabled": false
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» updatedAt|string|true|none||none|
|»» sections|[object]|true|none||none|
|»»» enabled|boolean|true|none||none|
|»»» settings|object|true|none||none|
|»»»» padding|object|true|none||none|
|»»»»» tablet|object|true|none||none|
|»»»»»» unit|string|true|none||none|
|»»»»»» top|integer|true|none||none|
|»»»»»» left|integer|true|none||none|
|»»»»»» bottom|integer|true|none||none|
|»»»»»» right|integer|true|none||none|
|»»»»» mobile|object|true|none||none|
|»»»»»» left|integer|true|none||none|
|»»»»»» bottom|integer|true|none||none|
|»»»»»» top|integer|true|none||none|
|»»»»»» unit|string|true|none||none|
|»»»»»» right|integer|true|none||none|
|»»»»» desktop|object|true|none||none|
|»»»»»» right|integer|true|none||none|
|»»»»»» left|integer|true|none||none|
|»»»»»» bottom|integer|true|none||none|
|»»»»»» top|integer|true|none||none|
|»»»»»» unit|string|true|none||none|
|»»»» advanced|object|true|none||none|
|»»»»» rotatingHeadline|object|false|none||none|
|»»»»»» words|[any]|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»» deviceVisibility|object|false|none||none|
|»»»»»» desktop|boolean|true|none||none|
|»»»»»» mobile|boolean|true|none||none|
|»»»»»» tablet|boolean|true|none||none|
|»»»»» stickyMobileCTA|boolean|false|none||none|
|»»»»» scrollIndicator|boolean|false|none||none|
|»»»»» countdownTimer|object|false|none||none|
|»»»»»» text|string|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»»» endDate|string|true|none||none|
|»»»»» highlightCollection|object|false|none||none|
|»»»»»» collectionId|string|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»» badges|object|false|none||none|
|»»»»»» showSale|boolean|true|none||none|
|»»»»»» showNew|boolean|true|none||none|
|»»»»» mobileLayoutOverride|string|false|none||none|
|»»»»» manualOrdering|boolean|false|none||none|
|»»»»» quickAddToCart|boolean|false|none||none|
|»»»»» analyticsTracking|boolean|false|none||none|
|»»»»» codBadge|boolean|false|none||none|
|»»»»» lazyLoading|boolean|false|none||none|
|»»»»» stockUrgency|object|false|none||none|
|»»»»»» threshold|integer|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»»» message|string|true|none||none|
|»»»»» animation|object|false|none||none|
|»»»»»» duration|integer|true|none||none|
|»»»»»» type|string|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»» responsiveSpacing|object|false|none||none|
|»»»»»» mobile|object|true|none||none|
|»»»»»»» marginTop|integer|true|none||none|
|»»»»»»» marginBottom|integer|true|none||none|
|»»»»»» desktop|object|true|none||none|
|»»»»»»» marginBottom|integer|true|none||none|
|»»»»»»» marginTop|integer|true|none||none|
|»»»»»» tablet|object|true|none||none|
|»»»»»»» marginBottom|integer|true|none||none|
|»»»»»»» marginTop|integer|true|none||none|
|»»»»» animatedEntrance|object|false|none||none|
|»»»»»» type|string|true|none||none|
|»»»»»» duration|integer|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»» highlightedWords|[object]|false|none||none|
|»»»»»» color|string|true|none||none|
|»»»»»» word|string|true|none||none|
|»»»»» seoHeadingLevel|string|false|none||none|
|»»»»» perItemColorControl|boolean|false|none||none|
|»»»»» metricEmphasis|boolean|false|none||none|
|»»»»» hoverAnimation|object|false|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»»» type|string|true|none||none|
|»»»»» inlinePlay|boolean|false|none||none|
|»»»»» internalSearch|boolean|false|none||none|
|»»»»» schemaMarkup|boolean|false|none||none|
|»»»»» highlightedFAQs|[any]|false|none||none|
|»»»»» whatsappOptIn|boolean|false|none||none|
|»»»»» autoCouponGeneration|object|false|none||none|
|»»»»»» discountValue|integer|true|none||none|
|»»»»»» discountType|string|true|none||none|
|»»»»»» couponCode|string|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»» redirectAfterSubmit|object|false|none||none|
|»»»»»» url|null|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»» antiSpam|boolean|false|none||none|
|»»»»» crmTagging|object|false|none||none|
|»»»»»» tags|[string]|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»» autoScroll|object|true|none||none|
|»»»»»» direction|string|true|none||none|
|»»»»»» speed|integer|true|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»» tooltips|boolean|true|none||none|
|»»»»» clickableLogos|boolean|true|none||none|
|»»»» content|object|true|none||none|
|»»»»» secondaryCTA|object|false|none||none|
|»»»»»» enabled|boolean|true|none||none|
|»»»»»» link|string|true|none||none|
|»»»»»» style|string|true|none||none|
|»»»»»» text|string|true|none||none|
|»»»»» primaryCTA|object|false|none||none|
|»»»»»» style|string|true|none||none|
|»»»»»» link|string|true|none||none|
|»»»»»» text|string|true|none||none|
|»»»»» headline|string|false|none||none|
|»»»»» textColor|string|false|none||none|
|»»»»» textAlignment|string|false|none||none|
|»»»»» supportingText|string|false|none||none|
|»»»»» text|string|false|none||none|
|»»»»» items|[object]|false|none||none|
|»»»»»» description|string|true|none||none|
|»»»»»» icon|string|true|none||none|
|»»»»»» color|string|true|none||none|
|»»»»»» title|string|true|none||none|
|»»»»»» answer|string|true|none||none|
|»»»»»» question|string|true|none||none|
|»»»»» logos|[object]|true|none||none|
|»»»»»» image|string|true|none||none|
|»»»»»» link|string|true|none||none|
|»»»»»» name|string|true|none||none|
|»»»» background|object|false|none||none|
|»»»» layout|object|true|none||none|
|»»»»» iconSize|integer|true|none||none|
|»»»»» columns|integer|true|none||none|
|»»»»» alignment|string|true|none||none|
|»»»» visual|object|false|none||none|
|»»»»» hoverEffects|string|true|none||none|
|»»»»» spacing|integer|true|none||none|
|»»»»» productCountVisibility|boolean|true|none||none|
|»»»» display|object|false|none||none|
|»»»»» showRating|boolean|true|none||none|
|»»»»» showDiscount|boolean|true|none||none|
|»»»»» showPrice|boolean|true|none||none|
|»»»» source|object|false|none||none|
|»»»» appearance|object|false|none||none|
|»»»»» marginTop|integer|false|none||none|
|»»»»» height|integer|false|none||none|
|»»»»» marginBottom|integer|false|none||none|
|»»»»» color|string|false|none||none|
|»»»»» playButtonStyle|string|true|none||none|
|»»»»» aspectRatio|string|true|none||none|
|»»»» style|object|false|none||none|
|»»»»» iconStyle|string|true|none||none|
|»»»»» defaultOpenItem|integer|true|none||none|
|»»»»» accordionStyle|string|true|none||none|
|»»»» styling|object|false|none||none|
|»»»»» maxWidth|integer|true|none||none|
|»»»»» alignment|string|true|none||none|
|»»»»» fontSize|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»» playback|object|false|none||none|
|»»»»» loop|boolean|true|none||none|
|»»»»» mute|boolean|true|none||none|
|»»»»» autoplay|boolean|true|none||none|
|»»»» video|object|false|none||none|
|»»»»» fallbackImage|string|true|none||none|
|»»»»» url|string|true|none||none|
|»»»» form|object|false|none||none|
|»»» order|integer|true|none||none|
|»»» id|string|true|none||none|

# Ecommerce/Customer

## GET Customer Details

GET /customer/

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Customer information",
  "data": {
    "id": "xDufVWe1dzSWQhue2ei7",
    "address": "imbab, giza",
    "phone": "01151784019",
    "name": "Yossef Mohamed abdelmohsen",
    "email": "yossefmohamed1121233@gmail.com",
    "currentPassword": "yossefmohamed1121233@gmail.com",
    "storeId": "W9DhSs7ZbZc9czcsYMr0WtqOCdy2",
    "createDate": {
      "_seconds": 1724845453,
      "_nanoseconds": 924000000
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» address|string|true|none||none|
|»» phone|string|true|none||none|
|»» name|string|true|none||none|
|»» email|string|true|none||none|
|»» currentPassword|string|true|none||none|
|»» storeId|string|true|none||none|
|»» createDate|object|true|none||none|
|»»» _seconds|integer|true|none||none|
|»»» _nanoseconds|integer|true|none||none|

## GET Get Customer Orders

GET /customer/orders

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|pageNo|query|string| yes |none|
|limit|query|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Product added to cart",
  "data": {
    "items": [
      {
        "id": "89249197",
        "date": {
          "_seconds": 1724866399,
          "_nanoseconds": 743000000
        },
        "status": "Delivered",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 1,
        "discountCode": "",
        "products": [
          {
            "id": "9182",
            "name": "happy",
            "variantId": "fc5ca0aa92aa07cc538d0af16ec487d534c6abf73a3ec24763582868be230eb9",
            "link": "https://qaf.vondera.shop/product/9182",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/9182/eeafc0f2-a3dd-4b0d-80f5-036e38d9a05f.jpg",
            "itemPrice": 800,
            "quantity": 1,
            "totalPrice": 800,
            "variantDisplay": {
              "Sizes": "Medium",
              "Colors": "White"
            }
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "PAID",
          "productsPrice": 800,
          "shippingFees": 80,
          "discount": 0,
          "totalPrice": 880,
          "paidAmount": 880,
          "remainingAmount": 0
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "",
          "address": "imbab, giza",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      },
      {
        "id": "28726232",
        "date": {
          "_seconds": 1724866331,
          "_nanoseconds": 694000000
        },
        "status": "Delivered",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 1,
        "discountCode": "",
        "products": [
          {
            "id": "2032",
            "name": "sabarr",
            "variantId": "ae15e7199365ea445650af812485c712899cf223fa302d8acd4f732d3686c79e",
            "link": "https://qaf.vondera.shop/product/2032",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2032/f942ad8e-5955-4744-8d59-a04821933ab3.jpg",
            "itemPrice": 250,
            "quantity": 1,
            "totalPrice": 250,
            "variantDisplay": {
              "size": "small",
              "color": "white"
            }
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "PAID",
          "productsPrice": 250,
          "shippingFees": 80,
          "discount": 0,
          "totalPrice": 330,
          "paidAmount": 330,
          "remainingAmount": 0
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "01151784019",
          "address": "imbab, giza",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      },
      {
        "id": "12063003",
        "date": {
          "_seconds": 1724077932,
          "_nanoseconds": 367000000
        },
        "status": "Deleted",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 1,
        "discountCode": "",
        "products": [
          {
            "id": "2356",
            "name": "friends sleeve",
            "variantId": "",
            "link": "https://qaf.vondera.shop/product/2356",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2356/07b0669f-7169-4a80-adee-61e801f5d3ad.jpg",
            "itemPrice": 250,
            "quantity": 1,
            "totalPrice": 250,
            "variantDisplay": {}
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "FAILED",
          "productsPrice": 250,
          "shippingFees": 80,
          "discount": 0,
          "totalPrice": 330,
          "paidAmount": 0,
          "remainingAmount": 330
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "",
          "address": "imbab, giza",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      },
      {
        "id": "88529077",
        "date": {
          "_seconds": 1723591604,
          "_nanoseconds": 817000000
        },
        "status": "Deleted",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 1,
        "discountCode": "5ASM22",
        "products": [
          {
            "id": "4827",
            "name": "nature",
            "variantId": "af1fca48f0987c5e8be7657b01802cca5a36a57b31b831edcc1c351070927aa1",
            "link": "https://qaf.vondera.shop/product/4827",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2356/07b0669f-7169-4a80-adee-61e801f5d3ad.jpg",
            "itemPrice": 200,
            "quantity": 1,
            "totalPrice": 200,
            "variantDisplay": {
              "Sizes": "Small"
            }
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "FAILED",
          "productsPrice": 200,
          "shippingFees": 80,
          "discount": 20,
          "totalPrice": 260,
          "paidAmount": 0,
          "remainingAmount": 260
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "",
          "address": "imbab, giza",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      },
      {
        "id": "38065166",
        "date": {
          "_seconds": 1723591604,
          "_nanoseconds": 107000000
        },
        "status": "Deleted",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 1,
        "discountCode": "5ASM22",
        "products": [
          {
            "id": "4827",
            "name": "nature",
            "variantId": "af1fca48f0987c5e8be7657b01802cca5a36a57b31b831edcc1c351070927aa1",
            "link": "https://qaf.vondera.shop/product/4827",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2356/07b0669f-7169-4a80-adee-61e801f5d3ad.jpg",
            "itemPrice": 200,
            "quantity": 1,
            "totalPrice": 200,
            "variantDisplay": {
              "Sizes": "Small"
            }
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "FAILED",
          "productsPrice": 200,
          "shippingFees": 80,
          "discount": 20,
          "totalPrice": 260,
          "paidAmount": 0,
          "remainingAmount": 260
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "",
          "address": "imbab, giza",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      },
      {
        "id": "83990559",
        "date": {
          "_seconds": 1723591603,
          "_nanoseconds": 113000000
        },
        "status": "Deleted",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 1,
        "discountCode": "5ASM22",
        "products": [
          {
            "id": "4827",
            "name": "nature",
            "variantId": "af1fca48f0987c5e8be7657b01802cca5a36a57b31b831edcc1c351070927aa1",
            "link": "https://qaf.vondera.shop/product/4827",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2356/07b0669f-7169-4a80-adee-61e801f5d3ad.jpg",
            "itemPrice": 200,
            "quantity": 1,
            "totalPrice": 200,
            "variantDisplay": {
              "Sizes": "Small"
            }
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "FAILED",
          "productsPrice": 200,
          "shippingFees": 80,
          "discount": 20,
          "totalPrice": 260,
          "paidAmount": 0,
          "remainingAmount": 260
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "",
          "address": "imbab, giza",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      },
      {
        "id": "54005436",
        "date": {
          "_seconds": 1723591599,
          "_nanoseconds": 820000000
        },
        "status": "Deleted",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 1,
        "discountCode": "5ASM22",
        "products": [
          {
            "id": "4827",
            "name": "nature",
            "variantId": "af1fca48f0987c5e8be7657b01802cca5a36a57b31b831edcc1c351070927aa1",
            "link": "https://qaf.vondera.shop/product/4827",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2356/07b0669f-7169-4a80-adee-61e801f5d3ad.jpg",
            "itemPrice": 200,
            "quantity": 1,
            "totalPrice": 200,
            "variantDisplay": {
              "Sizes": "Small"
            }
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "FAILED",
          "productsPrice": 200,
          "shippingFees": 80,
          "discount": 20,
          "totalPrice": 260,
          "paidAmount": 0,
          "remainingAmount": 260
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "",
          "address": "imbab, giza",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      },
      {
        "id": "09312203",
        "date": {
          "_seconds": 1723582158,
          "_nanoseconds": 512000000
        },
        "status": "Deleted",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 12,
        "discountCode": "5ASM2",
        "products": [
          {
            "id": "1845",
            "name": "ios variant test",
            "variantId": "",
            "link": "https://qaf.vondera.shop/product/1845",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/1845/1f831b67-0018-444f-af26-832b35695b1f.jpg",
            "itemPrice": 450,
            "quantity": 11,
            "totalPrice": 4950,
            "variantDisplay": {}
          },
          {
            "id": "4827",
            "name": "nature",
            "variantId": "3675ad94668150a7ce972d7cd1e776fb8eb7501c6be6074e040aed49c0dc771e",
            "link": "https://qaf.vondera.shop/product/4827",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2356/07b0669f-7169-4a80-adee-61e801f5d3ad.jpg",
            "itemPrice": 450,
            "quantity": 1,
            "totalPrice": 450,
            "variantDisplay": {
              "Sizes": "Large"
            }
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "FAILED",
          "productsPrice": 5400,
          "shippingFees": 80,
          "discount": 648,
          "totalPrice": 4832,
          "paidAmount": 0,
          "remainingAmount": 4832
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "01151784019",
          "address": "imbab, giza",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      },
      {
        "id": "39527853",
        "date": {
          "_seconds": 1723581927,
          "_nanoseconds": 212000000
        },
        "status": "Pending",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 8,
        "discountCode": "5ASM",
        "products": [
          {
            "id": "1845",
            "name": "ios variant test",
            "variantId": "",
            "link": "https://qaf.vondera.shop/product/1845",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/1845/1f831b67-0018-444f-af26-832b35695b1f.jpg",
            "itemPrice": 450,
            "quantity": 8,
            "totalPrice": 3600,
            "variantDisplay": {}
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "FAILED",
          "productsPrice": 3600,
          "shippingFees": 80,
          "discount": 720,
          "totalPrice": 2960,
          "paidAmount": 0,
          "remainingAmount": 2960
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "",
          "address": "cairo",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      },
      {
        "id": "03451666",
        "date": {
          "_seconds": 1722980441,
          "_nanoseconds": 337000000
        },
        "status": "Pending",
        "attachmentsCount": 0,
        "marketPlaceId": "ecommerce",
        "productsCount": 1,
        "discountCode": "YOSSEFTEST",
        "products": [
          {
            "id": "1845",
            "name": "ios variant test",
            "variantId": "",
            "link": "https://qaf.vondera.shop/product/1845",
            "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/1845/1f831b67-0018-444f-af26-832b35695b1f.jpg",
            "itemPrice": 450,
            "quantity": 1,
            "totalPrice": 450,
            "variantDisplay": {}
          }
        ],
        "payment": {
          "gateway": "COD",
          "method": "COD",
          "paymentStatus": "FAILED",
          "productsPrice": 450,
          "shippingFees": 80,
          "discount": 45,
          "totalPrice": 485,
          "paidAmount": 0,
          "remainingAmount": 485
        },
        "customer": {
          "name": "Yossef Mohamed abdelmohsen",
          "phone": "01151784019",
          "email": "yossefmohamed112233@gmail.com",
          "otherPhone": "",
          "address": "imbab, giza",
          "gov": "القاهرة"
        },
        "courier": {
          "name": "",
          "id": ""
        }
      }
    ],
    "isLastPage": false,
    "nextPageNumber": 2,
    "currentPage": 1,
    "totalPages": 3
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» items|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» date|object|true|none||none|
|»»»» _seconds|integer|true|none||none|
|»»»» _nanoseconds|integer|true|none||none|
|»»» status|string|true|none||none|
|»»» attachmentsCount|integer|true|none||none|
|»»» marketPlaceId|string|true|none||none|
|»»» productsCount|integer|true|none||none|
|»»» discountCode|string|true|none||none|
|»»» products|[object]|true|none||none|
|»»»» id|string|true|none||none|
|»»»» name|string|true|none||none|
|»»»» variantId|string|true|none||none|
|»»»» link|string|true|none||none|
|»»»» previewImage|string|true|none||none|
|»»»» itemPrice|integer|true|none||none|
|»»»» quantity|integer|true|none||none|
|»»»» totalPrice|integer|true|none||none|
|»»»» variantDisplay|object|true|none||none|
|»»»»» Sizes|string|true|none||none|
|»»»»» Colors|string|false|none||none|
|»»»»» size|string|false|none||none|
|»»»»» color|string|false|none||none|
|»»» payment|object|true|none||none|
|»»»» gateway|string|true|none||none|
|»»»» method|string|true|none||none|
|»»»» paymentStatus|string|true|none||none|
|»»»» productsPrice|integer|true|none||none|
|»»»» shippingFees|integer|true|none||none|
|»»»» discount|integer|true|none||none|
|»»»» totalPrice|integer|true|none||none|
|»»»» paidAmount|integer|true|none||none|
|»»»» remainingAmount|integer|true|none||none|
|»»» customer|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» phone|string|true|none||none|
|»»»» email|string|true|none||none|
|»»»» otherPhone|string|true|none||none|
|»»»» address|string|true|none||none|
|»»»» gov|string|true|none||none|
|»»» courier|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» id|string|true|none||none|
|»» isLastPage|boolean|true|none||none|
|»» nextPageNumber|integer|true|none||none|
|»» currentPage|integer|true|none||none|
|»» totalPages|integer|true|none||none|

## PUT Unsubsribe from newsletter

PUT /customer/unsubscribe

> Body Parameters

```json
"{\n    \"unSubscribeToken\": \"\" // Send the token here.\n}"
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» unSubscribeToken|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Ecommerce/Customer/Wishlist

## POST Add to wishlist

POST /customer/wishlist

### Add Product to Customer Wishlist

This endpoint is used to add a product to the customer's wishlist.

#### Request Body

- `productId`: (string) The ID of the product to be added to the wishlist.
    

#### Response

The response will include the updated customer wishlist details. The response status code is 200 and the content type is `application/json`.

Example response:

``` json
{
    "status": 0,
    "message": "",
    "data": null
}

 ```

#### Headers

- Content-Type: application/json
    

#### API Endpoint

`POST /customer/wishlist`

> Body Parameters

```json
{
  "productId": "3000"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» productId|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Product added to wishlist",
  "data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|

## GET Get Wishlist

GET /customer/wishlist

### Retrieve Customer Wishlist

The endpoint retrieves a paginated list of items from the customer's wishlist. The request includes the page number and limit of items per page as query parameters.

#### Request

- Method: GET
    
- URL: `{{base_url}}/customer/wishlist?page=1&limit=5`
    

#### Response

The response is a JSON object with the following schema:

``` json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "integer"
    },
    "message": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "properties": {
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "categoryId": {
                "type": "string"
              },
              "price": {
                "type": "number"
              },
              "buyingPrice": {
                "type": "number"
              },
              "alwaysStocked": {
                "type": "boolean"
              },
              "categoryName": {
                "type": "string"
              },
              "crossedPrice": {
                "type": "number"
              },
              "quantity": {
                "type": "integer"
              },
              "subCategoryId": {
                "type": "string"
              },
              "subCategoryName": {
                "type": "string"
              },
              "addedBy": {
                "type": "string"
              },
              "storeId": {
                "type": "string"
              },
              "createdFrom": {
                "type": "string"
              },
              "sold": {
                "type": "integer"
              },
              "createDate": {
                "type": "object",
                "properties": {
                  "_seconds": {
                    "type": "integer"
                  },
                  "_nanoseconds": {
                    "type": "integer"
                  }
                }
              },
              "thumbnails": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "sku": {
                "type": "string"
              },
              "hashVarients": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "Color": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              },
              "desc": {
                "type": "string"
              },
              "variantsDetails": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "sold": {
                      "type": "integer"
                    },
                    "sku": {
                      "type": "string"
                    },
                    "cost": {
                      "type": "number"
                    },
                    "price": {
                      "type": "number"
                    },
                    "quantity": {
                      "type": "integer"
                    },
                    "optimizedImage": {
                      "type": "string"
                    },
                    "options": {
                      "type": "object",
                      "properties": {
                        "Color": {
                          "type": "string"
                        }
                      }
                    },
                    "image": {
                      "type": "string"
                    }
                  }
                }
              },
              "visible": {
                "type": "boolean"
              },
              "skusList": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "listOptamized": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "listPhotos": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "site_products_view": {
                "type": "integer"
              },
              "wishlist": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          }
        },
        "isLastPage": {
          "type": "boolean"
        },
        "nextPageNumber": {
          "type": ["integer", "null"]
        },
        "currentPage": {
          "type": "integer"
        },
        "totalPages": {
          "type": "integer"
        }
      }
    }
  }
}

 ```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|page|query|string| yes |none|
|limit|query|string| yes |none|
|Authorization|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Fetched wishlist products",
  "data": {
    "items": [
      {
        "id": "2032",
        "name": "sabarr",
        "description": "",
        "price": 250,
        "crossedPrice": 0,
        "mainImage": {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2032/f942ad8e-5955-4744-8d59-a04821933ab3.jpg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2032/f942ad8e-5955-4744-8d59-a04821933ab3.jpg"
        },
        "link": "https://qaf.vondera.shop/product/2032",
        "categoryName": "Sleeves",
        "categoryLink": "https://qaf.vondera.shop/products/all?category=YAed4ckxnYHIT2NwV4lm",
        "subCategoryName": "",
        "subCategoryId": "",
        "sku": "",
        "quantity": 1000,
        "isAvailable": true,
        "currency": "EGP",
        "country": "EG",
        "images": [
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2032/f942ad8e-5955-4744-8d59-a04821933ab3.jpg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/2032/f942ad8e-5955-4744-8d59-a04821933ab3.jpg"
          }
        ],
        "rating": {
          "average": 5,
          "count": 0
        },
        "variantsDisplay": {
          "size": [
            "small",
            "big"
          ],
          "color": [
            "white",
            "black"
          ]
        },
        "variantsSettings": [
          {
            "id": "ae15e7199365ea445650af812485c712899cf223fa302d8acd4f732d3686c79e",
            "quantity": 1000,
            "price": 500,
            "sku": "",
            "displayOptions": {
              "color": "white",
              "size": "small"
            },
            "images": {
              "originalSize": "",
              "smallSize": ""
            },
            "currency": "EGP",
            "country": "EG"
          },
          {
            "id": "d60fe45094166f6f4d0da791e68c844d466c1e1670829a239c72980c57f05e14",
            "quantity": 1000,
            "price": 250,
            "sku": "",
            "displayOptions": {
              "size": "small",
              "color": "black"
            },
            "images": {
              "originalSize": "",
              "smallSize": ""
            },
            "currency": "EGP",
            "country": "EG"
          },
          {
            "id": "81a09552500835bbd1df65dcae95e7dcd683b3278fc9c5061444351480c73734",
            "quantity": 1000,
            "price": 250,
            "sku": "",
            "displayOptions": {
              "color": "white",
              "size": "big"
            },
            "images": {
              "originalSize": "",
              "smallSize": ""
            },
            "currency": "EGP",
            "country": "EG"
          },
          {
            "id": "3bc3ab826aafe443470babdf05a0b6bb5c6c72512921fdab81fa9262c8de96e3",
            "quantity": 1000,
            "price": 250,
            "sku": "",
            "displayOptions": {
              "size": "big",
              "color": "black"
            },
            "images": {
              "originalSize": "",
              "smallSize": ""
            },
            "currency": "EGP",
            "country": "EG"
          }
        ],
        "labels": {
          "lastPiece": false,
          "outOfStock": false,
          "onSale": false
        }
      }
    ],
    "isLastPage": true,
    "nextPageNumber": null,
    "currentPage": 1,
    "totalPages": 1
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» items|[object]|true|none||none|
|»»» id|string|false|none||none|
|»»» name|string|false|none||none|
|»»» description|string|false|none||none|
|»»» price|integer|false|none||none|
|»»» crossedPrice|integer|false|none||none|
|»»» mainImage|object|false|none||none|
|»»»» originalSize|string|true|none||none|
|»»»» smallSize|string|true|none||none|
|»»» link|string|false|none||none|
|»»» categoryName|string|false|none||none|
|»»» categoryLink|string|false|none||none|
|»»» subCategoryName|string|false|none||none|
|»»» subCategoryId|string|false|none||none|
|»»» sku|string|false|none||none|
|»»» quantity|integer|false|none||none|
|»»» isAvailable|boolean|false|none||none|
|»»» currency|string|false|none||none|
|»»» country|string|false|none||none|
|»»» images|[object]|false|none||none|
|»»»» originalSize|string|false|none||none|
|»»»» smallSize|string|false|none||none|
|»»» rating|object|false|none||none|
|»»»» average|integer|true|none||none|
|»»»» count|integer|true|none||none|
|»»» variantsDisplay|object|false|none||none|
|»»»» size|[string]|true|none||none|
|»»»» color|[string]|true|none||none|
|»»» variantsSettings|[object]|false|none||none|
|»»»» id|string|true|none||none|
|»»»» quantity|integer|true|none||none|
|»»»» price|integer|true|none||none|
|»»»» sku|string|true|none||none|
|»»»» displayOptions|object|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» size|string|true|none||none|
|»»»» images|object|true|none||none|
|»»»»» originalSize|string|true|none||none|
|»»»»» smallSize|string|true|none||none|
|»»»» currency|string|true|none||none|
|»»»» country|string|true|none||none|
|»»» labels|object|false|none||none|
|»»»» lastPiece|boolean|true|none||none|
|»»»» outOfStock|boolean|true|none||none|
|»»»» onSale|boolean|true|none||none|
|»» isLastPage|boolean|true|none||none|
|»» nextPageNumber|null|true|none||none|
|»» currentPage|integer|true|none||none|
|»» totalPages|integer|true|none||none|

## DELETE Delete from Wishlist

DELETE /customer/wishlist

### Delete Customer Wishlist

This endpoint is used to delete a product from the customer's wishlist.

#### Request

The request should be sent as an HTTP DELETE to `{{base_url}}/customer/wishlist`.

##### Request Body

- `productId`: (string) The ID of the product to be removed from the wishlist.
    

Example:

``` json
{
    "productId": "2032"
}

 ```

#### Response

- Status: 200
    
- Content-Type: application/json
    

##### Response Body

- `status`: (integer) Indicates the status of the operation. A value of 0 typically indicates success.
    
- `message`: (string) A message related to the operation.
    
- `data`: (object) The data returned by the operation. In the case of deletion, this is usually null.
    

Example Response:

``` json
{
    "status": 0,
    "message": "",
    "data": null
}

 ```

> Body Parameters

```json
{
  "productId": "0300"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» productId|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Product removed to wishlist",
  "data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|

# Ecommerce/Customer/Auth

## POST Customer Login

POST /customer/login

> Body Parameters

```json
{
  "email": "armjldtrainer@gmail.com",
  "password": "998211"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|link|header|string| yes |none|
|body|body|object| no |none|
|» email|body|string| yes |none|
|» password|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "xDufVWe1dzSWQhue2ei7",
      "address": "imbab, giza",
      "phone": "01151784019",
      "name": "Yossef Mohamed abdelmohsen",
      "email": "yossefmohamed1121233@gmail.com",
      "currentPassword": "yossefmohamed1121233@gmail.com",
      "storeId": "W9DhSs7ZbZc9czcsYMr0WtqOCdy2",
      "createDate": {
        "_seconds": 1724845453,
        "_nanoseconds": 924000000
      }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoieER1ZlZXZTFkelNXUWh1ZTJlaTciLCJlbWFpbCI6Inlvc3NlZm1vaGFtZWQxMTIxMjMzQGdtYWlsLmNvbSIsInN0b3JlSWQiOiJXOURoU3M3WmJaYzljemNzWU1yMFd0cU9DZHkyIiwiaWF0IjoxNzMzODA0NTk5LCJleHAiOjE3MzYzOTY1OTl9.xUfmYk-9IcSeu9mYNX7JkAnKExaU2fKt6wLunqX9oyk"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» user|object|true|none||none|
|»»» id|string|true|none||none|
|»»» address|string|true|none||none|
|»»» phone|string|true|none||none|
|»»» name|string|true|none||none|
|»»» email|string|true|none||none|
|»»» currentPassword|string|true|none||none|
|»»» storeId|string|true|none||none|
|»»» createDate|object|true|none||none|
|»»»» _seconds|integer|true|none||none|
|»»»» _nanoseconds|integer|true|none||none|
|»» token|string|true|none||none|

## POST Sign Up

POST /customer/signup

> Body Parameters

```json
{
  "name": "Shreif El Sayed",
  "email": "armjldtrainer@vondera.com",
  "password": "123456",
  "address": "This is an address",
  "gov": "Cairo",
  "phone": "01114077125",
  "countryCode": "+2",
  "newsLetterEnabled": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» email|body|string| yes |none|
|» password|body|string| yes |none|
|» address|body|string| yes |none|
|» gov|body|string| yes |none|
|» phone|body|string| yes |none|
|» countryCode|body|string| yes |none|
|» newsLetterEnabled|body|boolean| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Customer created successfully",
  "data": {
    "customer": {
      "id": "uYD9i3DBUklyrJ5bdoHE",
      "name": "Shreif El Sayed",
      "email": "armjldtrainerrrr@gmail.com",
      "currentPassword": "123456",
      "phone": "01114077125",
      "gov": "Cairo",
      "address": "This is an address",
      "storeId": "W9DhSs7ZbZc9czcsYMr0WtqOCdy2",
      "createDate": "2024-12-10T04:42:47.366Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoidVlEOWkzREJVa2x5cko1YmRvSEUiLCJlbWFpbCI6ImFybWpsZHRyYWluZXJycnJAZ21haWwuY29tIiwic3RvcmVJZCI6Ilc5RGhTczdaYlpjOWN6Y3NZTXIwV3RxT0NkeTIiLCJpYXQiOjE3MzM4MDU3NjcsImV4cCI6MTczNjM5Nzc2N30.7yZV4X7TCigmvuOR-mTa-Y4nqdJy5-p9TeIRzucqepI"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» customer|object|true|none||none|
|»»» id|string|true|none||none|
|»»» name|string|true|none||none|
|»»» email|string|true|none||none|
|»»» currentPassword|string|true|none||none|
|»»» phone|string|true|none||none|
|»»» gov|string|true|none||none|
|»»» address|string|true|none||none|
|»»» storeId|string|true|none||none|
|»»» createDate|string|true|none||none|
|»» token|string|true|none||none|

## DELETE Delete Customer

DELETE /customer/

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Forget Password

POST /customer/forget

> Body Parameters

```json
{
  "email": "youssefalcon30@gmail.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Forget password email sent successfully",
  "data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|

# Ecommerce/Customer/Update

## PUT Update

PUT /customer/update

> Body Parameters

```json
{
  "name": "Shreif El Sayed",
  "email": "armjldtrainerrrr@gmail.com",
  "address": "This is an address",
  "gov": "Cairo",
  "phone": "01114077125",
  "newsLetterEnabled": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» email|body|string| yes |none|
|» address|body|string| yes |none|
|» gov|body|string| yes |none|
|» phone|body|string| yes |none|
|» newsLetterEnabled|body|boolean| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## PUT Change Password

PUT /customer/change-password

> Body Parameters

```json
{
  "currentPassword": "test123",
  "newPassword": "123456"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» currentPassword|body|string| yes |none|
|» newPassword|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Reset Password

POST /customer/reset-password

> Body Parameters

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiMDExMTQwNzcxMjUiLCJlbWFpbCI6ImFybWpsZHRyYWluZXJAZ21haWwuY29tIiwic3RvcmVJZCI6Ilc5RGhTczdaYlpjOWN6Y3NZTXIwV3RxT0NkeTIiLCJpYXQiOjE3NjQ0NzY4MDUsImV4cCI6MTc2NDU2MzIwNX0.8asi2ruMAW6tNQdUZ2mbHftcydnlqXAnIRLKVBJ_Y3Q",
  "newPassword": "878787"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» token|body|string| yes |none|
|» newPassword|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Password reset successfully",
  "data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|

# Ecommerce/Products

## GET Get Products

GET /products

### Retrieve Products with Pagination

The endpoint retrieves a list of products with pagination.

#### Request

- Method: GET
    
- URL: `{{base_url}}/products`
    
- Query Parameters:
    
    - `pageNo`: 1
        
    - `limit`: 10
        

#### Response

The response contains a JSON schema for the data structure as follows:

``` json
{
  "status": {
    "type": "number"
  },
  "message": {
    "type": "string"
  },
  "data": {
    "type": "object",
    "properties": {
      "items": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "mainImage": {
              "type": "object",
              "properties": {
                "small": {
                  "type": "string"
                },
                "large": {
                  "type": "string"
                }
              }
            },
            "variants": {
              "type": "object",
              "properties": {
                "Size": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "images": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "link": {
              "type": "string"
            },
            "categoryName": {
              "type": "string"
            },
            "categoryLink": {
              "type": "string"
            },
            "isAvilable": {
              "type": "boolean"
            },
            "curreny": {
              "type": "string"
            },
            "country": {
              "type": "string"
            }
          }
        }
      },
      "isLastPage": {
        "type": "boolean"
      },
      "nextPageNumber": {
        "type": "number"
      },
      "currentPage": {
        "type": "number"
      },
      "totalPages": {
        "type": "number"
      }
    }
  }
}

 ```

``` json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "number"
    },
    "message": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "properties": {
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "price": {
                "type": "number"
              },
              "mainImage": {
                "type": "object",
                "properties": {
                  "small": {
                    "type": "string"
                  },
                  "large": {
                    "type": "string"
                  }
                }
              },
              "variants": {
                "type": "object",
                "properties": {
                  "Size": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              },
              "images": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "link": {
                "type": "string"
              },
              "categoryName": {
                "type": "string"
              },
              "categoryLink": {
                "type": "string"
              },
              "isAvilable": {
                "type": "boolean"
              },
              "curreny": {
                "type": "string"
              },
              "country": {
                "type": "string"
              }
            }
          }
        },
        "isLastPage": {
          "type": "boolean"
        },
        "nextPageNumber": {
          "type": "number"
        },
        "currentPage": {
          "type": "number"
        },
        "totalPages": {
          "type": "number"
        }
      }
    }
  }
}

 ```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|categoryId|query|string| no |id, null|
|subCategoryId|query|string| no |nul, id|
|sortDirection|query|string| no |asc, desc, null|
|priceFrom|query|string| no |number or null|
|priceTo|query|string| no |number or null|
|inStock|query|string| no |true, false, null|
|keyword|query|string| no |none|
|onSale|query|string| no |none|
|sortBy|query|array[string]| no |priority, price, createDate, sold, view|
|sortDirication|query|string| no |none|
|pageNo|query|string| yes |none|
|limit|query|string| yes |none|
|fullData|query|string| no |true, false -> Default is false|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "items": [
      {
        "id": "1441",
        "description": "TESTING ",
        "price": 700,
        "mainImage": {
          "small": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1441/c8073995-cdde-4f5c-858f-c11e2e3ae9ca.jpg",
          "large": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1441/c8073995-cdde-4f5c-858f-c11e2e3ae9ca.jpg"
        },
        "variants": {
          "Size": [
            "S",
            "l",
            "M"
          ]
        },
        "images": [
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1441/c8073995-cdde-4f5c-858f-c11e2e3ae9ca.jpg",
          "https://vondera-bucket.s3.amazonaws.com/products/1441//2743.jpg"
        ],
        "link": "https://qotoofs.vondera.shop/product/1441",
        "categoryName": "Pants",
        "categoryLink": "https://qotoofs.vondera.shop/products/all?category=FduUM6bHJHXOEfbPxXaM",
        "isAvilable": true,
        "curreny": "EGP",
        "country": "EG"
      },
      {
        "id": "1699",
        "description": "",
        "price": 200,
        "mainImage": {
          "small": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1699/dcbfd4a1-86d2-4c42-8b48-a16237b3df4c.jpg",
          "large": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1699/dcbfd4a1-86d2-4c42-8b48-a16237b3df4c.jpg"
        },
        "variants": {
          "color": [
            "brown"
          ]
        },
        "images": [
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1699/dcbfd4a1-86d2-4c42-8b48-a16237b3df4c.jpg"
        ],
        "link": "https://qotoofs.vondera.shop/product/1699",
        "categoryName": "Croose",
        "categoryLink": "https://qotoofs.vondera.shop/products/all?category=oqKSWSJW6Z8BtEbzT3vl",
        "isAvilable": true,
        "curreny": "EGP",
        "country": "EG"
      },
      {
        "id": "1752",
        "description": "",
        "price": 300,
        "mainImage": {
          "small": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1752/32c64800-a565-43bc-af3c-9281110c30f8.jpg",
          "large": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1752/32c64800-a565-43bc-af3c-9281110c30f8.jpg"
        },
        "variants": {},
        "images": [
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1752/32c64800-a565-43bc-af3c-9281110c30f8.jpg",
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1752/f20fa9a8-567f-404f-898f-175102d91747.jpg"
        ],
        "link": "https://qotoofs.vondera.shop/product/1752",
        "categoryName": "Croose",
        "categoryLink": "https://qotoofs.vondera.shop/products/all?category=oqKSWSJW6Z8BtEbzT3vl",
        "isAvilable": true,
        "curreny": "EGP",
        "country": "EG"
      },
      {
        "id": "1769",
        "description": "A patched simple and comfortable hoodie will surely find a place in your wardrobe and everyday outfits.\n-\nMaterial: Fur-lined hoodie for ultimate warmth.\nOversized fit.",
        "price": 700,
        "mainImage": {
          "small": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1769/fe7b8af5-278d-4aa9-a34c-2f3a18617db3.jpg",
          "large": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1769/fe7b8af5-278d-4aa9-a34c-2f3a18617db3.jpg"
        },
        "variants": {
          "Size": [
            "S",
            "M",
            "L",
            "XL"
          ]
        },
        "images": [
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1769/fe7b8af5-278d-4aa9-a34c-2f3a18617db3.jpg",
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1769/9471b733-1bba-4d7e-91e9-e4c591b6b195.jpg",
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1769/c92dcf75-8971-4a93-a52d-66868affc3d1.jpg",
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1769/f44cdb9e-aaf4-42a8-ac19-80955be3784e.jpg"
        ],
        "link": "https://qotoofs.vondera.shop/product/1769",
        "categoryName": "Artists Hoodies",
        "categoryLink": "https://qotoofs.vondera.shop/products/all?category=iglxBfYyXYlui9f3GKHs",
        "isAvilable": true,
        "curreny": "EGP",
        "country": "EG"
      },
      {
        "id": "2111",
        "description": "* oversized T-shirt features a drop shoulder, loose fit.\n* Wearing this outfit will give you a comfy feeling.\n* Machine Wash.\n* Suitable for casual, weekend, holiday, party, club, house, and outdoor.\n* Crew neck, 100% Cotton.\n* Please refer to the size chart",
        "price": 600,
        "mainImage": {
          "small": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/2111/d9a06fe9-134d-486a-878f-c796e96bb073.jpg",
          "large": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/2111/d9a06fe9-134d-486a-878f-c796e96bb073.jpg"
        },
        "variants": {
          "Size": [
            "XS",
            "S",
            "M",
            "L"
          ]
        },
        "images": [
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/2111/d9a06fe9-134d-486a-878f-c796e96bb073.jpg",
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/2111/2cec8d1c-ccf6-4373-9fd7-723dda2014ea.jpg",
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/2111/33bb887a-be56-41e3-a43b-3f71c48d1d65.jpg",
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/2111/de7ee4b6-e1a8-400c-a7e7-b238288354a2.jpg",
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/2111/fd4d3fec-abc5-4528-9ffc-4ecba8c09224.jpg",
          "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/2111/5f822f6a-62fd-4e8a-bbb0-66fac3975ad9.jpg"
        ],
        "link": "https://qotoofs.vondera.shop/product/2111",
        "categoryName": "Summer Tees",
        "categoryLink": "https://qotoofs.vondera.shop/products/all?category=h8jKH8UYNh8S6VCchAcS",
        "isAvilable": true,
        "curreny": "EGP",
        "country": "EG"
      }
    ],
    "isLastPage": false,
    "nextPageNumber": 2,
    "currentPage": 1,
    "totalPages": 22
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» items|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» description|string|true|none||none|
|»»» price|integer|true|none||none|
|»»» mainImage|object|true|none||none|
|»»»» small|string|true|none||none|
|»»»» large|string|true|none||none|
|»»» variants|object|true|none||none|
|»»»» Size|[string]|true|none||none|
|»»»» color|[string]|false|none||none|
|»»» images|[string]|true|none||none|
|»»» link|string|true|none||none|
|»»» categoryName|string|true|none||none|
|»»» categoryLink|string|true|none||none|
|»»» isAvilable|boolean|true|none||none|
|»»» curreny|string|true|none||none|
|»»» country|string|true|none||none|
|»» isLastPage|boolean|true|none||none|
|»» nextPageNumber|integer|true|none||none|
|»» currentPage|integer|true|none||none|
|»» totalPages|integer|true|none||none|

## GET Get Products V2

GET /products/v2

### Retrieve Products with Pagination

The endpoint retrieves a list of products with pagination.

#### Request

- Method: GET
    
- URL: `{{base_url}}/products`
    
- Query Parameters:
    
    - `pageNo`: 1
        
    - `limit`: 10
        

#### Response

The response contains a JSON schema for the data structure as follows:

``` json
{
  "status": {
    "type": "number"
  },
  "message": {
    "type": "string"
  },
  "data": {
    "type": "object",
    "properties": {
      "items": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "mainImage": {
              "type": "object",
              "properties": {
                "small": {
                  "type": "string"
                },
                "large": {
                  "type": "string"
                }
              }
            },
            "variants": {
              "type": "object",
              "properties": {
                "Size": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "images": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "link": {
              "type": "string"
            },
            "categoryName": {
              "type": "string"
            },
            "categoryLink": {
              "type": "string"
            },
            "isAvilable": {
              "type": "boolean"
            },
            "curreny": {
              "type": "string"
            },
            "country": {
              "type": "string"
            }
          }
        }
      },
      "isLastPage": {
        "type": "boolean"
      },
      "nextPageNumber": {
        "type": "number"
      },
      "currentPage": {
        "type": "number"
      },
      "totalPages": {
        "type": "number"
      }
    }
  }
}

 ```

``` json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "number"
    },
    "message": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "properties": {
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "price": {
                "type": "number"
              },
              "mainImage": {
                "type": "object",
                "properties": {
                  "small": {
                    "type": "string"
                  },
                  "large": {
                    "type": "string"
                  }
                }
              },
              "variants": {
                "type": "object",
                "properties": {
                  "Size": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              },
              "images": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "link": {
                "type": "string"
              },
              "categoryName": {
                "type": "string"
              },
              "categoryLink": {
                "type": "string"
              },
              "isAvilable": {
                "type": "boolean"
              },
              "curreny": {
                "type": "string"
              },
              "country": {
                "type": "string"
              }
            }
          }
        },
        "isLastPage": {
          "type": "boolean"
        },
        "nextPageNumber": {
          "type": "number"
        },
        "currentPage": {
          "type": "number"
        },
        "totalPages": {
          "type": "number"
        }
      }
    }
  }
}

 ```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|pageKey|query|string| yes |Optional|
|limit|query|string| yes |none|
|categoryId|query|string| no |id, null|
|subCategoryId|query|string| no |nul, id|
|sortDirection|query|string| no |asc, desc, null|
|priceFrom|query|string| no |number or null|
|priceTo|query|string| no |number or null|
|inStock|query|string| no |true, false, null|
|keyword|query|string| no |none|
|onSale|query|string| no |none|
|sortBy|query|array[string]| no |priority, price, createDate, sold, view|
|sortDirication|query|string| no |none|
|fullData|query|string| no |true, false -> Default is false|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "items": [
      {
        "id": "17677039",
        "name": "ami paris sweatshirt",
        "price": 1500,
        "crossedPrice": 0,
        "mainImage": {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/eUSQuatFvESwbdXghw9jm3U0M002/products/17677039/9f681ba6-5a19-490e-bcd7-275057da0bb2.jpeg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/eUSQuatFvESwbdXghw9jm3U0M002/products/17677039/9f681ba6-5a19-490e-bcd7-275057da0bb2.jpeg"
        },
        "link": "https://fynz.vondera.io/product/17677039",
        "categoryId": "L1LEfJmgrn7UGa3qdPrO",
        "categoryName": " ",
        "categoryLink": "https://fynz.vondera.io/products/all?category=L1LEfJmgrn7UGa3qdPrO",
        "subCategoryName": "",
        "subCategoryId": "",
        "quantity": 0,
        "isAvailable": false,
        "currency": "EGP",
        "images": [
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/eUSQuatFvESwbdXghw9jm3U0M002/products/17677039/9f681ba6-5a19-490e-bcd7-275057da0bb2.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/eUSQuatFvESwbdXghw9jm3U0M002/products/17677039/9f681ba6-5a19-490e-bcd7-275057da0bb2.jpeg"
          }
        ],
        "variantsCount": 3,
        "variantPriceRange": {
          "minPrice": 1500,
          "maxPrice": 1500
        },
        "rating": {
          "average": 0,
          "count": 0
        },
        "labels": {
          "lastPiece": false,
          "outOfStock": true,
          "onSale": false,
          "preOrder": false
        }
      }
    ],
    "pageItems": 1,
    "totalItems": 11,
    "totalPages": 3,
    "isLastPage": true,
    "nextPageKey": "NzM2NTc2NTU3NzU0ZjMxMGE5NGE2YjVmYjRjOGMzMWI6MjRjMmNiNzZiMTNmMTU2MzRkYmQ2ZjM4ZjRiZTkxNGIxOWE0NTNiNWI2ZDgzNWQ3ZWM3MDczZTc1ZTlkYzU4YTQwMWYzMGZlNTY2Y2MyNGE0MTAyODY0MjYwMDc3YmQzNzJiODI0ZjJlMjc2NGNjYzM1ZGQ5ODM5MGE5MDZlMDQ"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» items|[object]|true|none||none|
|»»» id|string|false|none||none|
|»»» name|string|false|none||none|
|»»» price|integer|false|none||none|
|»»» crossedPrice|integer|false|none||none|
|»»» mainImage|object|false|none||none|
|»»»» originalSize|string|true|none||none|
|»»»» smallSize|string|true|none||none|
|»»» link|string|false|none||none|
|»»» categoryId|string|false|none||none|
|»»» categoryName|string|false|none||none|
|»»» categoryLink|string|false|none||none|
|»»» subCategoryName|string|false|none||none|
|»»» subCategoryId|string|false|none||none|
|»»» quantity|integer|false|none||none|
|»»» isAvailable|boolean|false|none||none|
|»»» currency|string|false|none||none|
|»»» images|[object]|false|none||none|
|»»»» originalSize|string|false|none||none|
|»»»» smallSize|string|false|none||none|
|»»» variantsCount|integer|false|none||none|
|»»» variantPriceRange|object|false|none||none|
|»»»» minPrice|integer|true|none||none|
|»»»» maxPrice|integer|true|none||none|
|»»» rating|object|false|none||none|
|»»»» average|integer|true|none||none|
|»»»» count|integer|true|none||none|
|»»» labels|object|false|none||none|
|»»»» lastPiece|boolean|true|none||none|
|»»»» outOfStock|boolean|true|none||none|
|»»»» onSale|boolean|true|none||none|
|»»»» preOrder|boolean|true|none||none|
|»» pageItems|integer|true|none||none|
|»» totalItems|integer|true|none||none|
|»» totalPages|integer|true|none||none|
|»» isLastPage|boolean|true|none||none|
|»» nextPageKey|string|true|none||none|

## GET Get Product By Id

GET /products/single/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|sessionid|header|string| no |none|
|language|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "product": {
      "id": "84057478",
      "name": "bundle test product",
      "isWished": false,
      "description": "<p>بكرة الزوج</p>",
      "price": 500,
      "isDigital": false,
      "bundles": [
        {
          "title": "Buy 2 Get 1",
          "quantity": 3,
          "price": 1000,
          "id": "360809fc-bc84-4002-8b8c-23107e74c720"
        },
        {
          "title": "buy 5 get 5",
          "quantity": 10,
          "price": 6000,
          "id": "67003a15-4f8b-4467-92c4-6ea2a7552c02"
        }
      ],
      "hasBundles": true,
      "sections": [],
      "crossedPrice": 700,
      "mainImage": {
        "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8.jpg",
        "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8-thumbnail.jpg"
      },
      "link": "https://qaf.vondera.io/product/84057478",
      "categoryId": "fJnY2GmzJM8LO4p9gFgx",
      "categoryName": "cat",
      "categoryLink": "https://qaf.vondera.io/products/all?category=fJnY2GmzJM8LO4p9gFgx",
      "subCategoryName": "",
      "subCategoryId": "",
      "sku": "",
      "priority": 1000,
      "quantity": 19,
      "isAvailable": true,
      "currency": "EGP",
      "country": "EG",
      "images": [
        {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8.jpg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8-thumbnail.jpg"
        },
        {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/7b3e1eb8-0383-4e8a-8cb2-17e0bf34d571.jpeg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/7b3e1eb8-0383-4e8a-8cb2-17e0bf34d571.jpeg"
        },
        {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/e167a60d-e4cb-445c-bcb2-1f0422686e61.jpeg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/e167a60d-e4cb-445c-bcb2-1f0422686e61.jpeg"
        },
        {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/c8d8a6cc-107f-44a2-9c73-99643f16bd79.jpeg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/c8d8a6cc-107f-44a2-9c73-99643f16bd79.jpeg"
        }
      ],
      "isFeatured": false,
      "rating": {
        "average": 3,
        "count": 2
      },
      "variantsDisplay": {
        "color": [
          "red",
          "green",
          "blue"
        ],
        "size": [
          "small",
          "medium"
        ]
      },
      "variantsSettings": [
        {
          "id": "0793ab5b01a9f5d995e5490b0375bd8e081a900c3ad36862f6cc00120ec98f14",
          "quantity": 0,
          "allowOutOfStock": false,
          "barCode": "",
          "customPricing": true,
          "enableTracking": true,
          "price": 500,
          "cost": 250,
          "sku": "",
          "displayOptions": {
            "color": "red",
            "size": "small"
          },
          "content": "",
          "stockStatus": "OUT_OF_STOCK",
          "labels": {
            "overrideStock": false,
            "outOfStock": true,
            "lastPiece": false,
            "preOrder": false
          },
          "images": {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/variants/0a37bb15-9035-48ac-b9fa-787a9a6cb33c.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/variants/0a37bb15-9035-48ac-b9fa-787a9a6cb33c.jpeg"
          },
          "currency": "EGP",
          "country": "EG"
        },
        {
          "id": "bcf075b5c65c7466ee6a36a3a820a273ec2386c924e609c4eefad154eb2f2363",
          "quantity": 2,
          "allowOutOfStock": false,
          "barCode": "",
          "customPricing": false,
          "enableTracking": true,
          "price": 500,
          "cost": 250,
          "sku": "",
          "displayOptions": {
            "color": "red",
            "size": "medium"
          },
          "content": "",
          "stockStatus": "IN_STOCK",
          "labels": {
            "overrideStock": false,
            "outOfStock": false,
            "lastPiece": false,
            "preOrder": false
          },
          "images": {
            "originalSize": "",
            "smallSize": ""
          },
          "currency": "EGP",
          "country": "EG"
        },
        {
          "id": "fd6e783f3638fd35c13bede22e7df723a87de0935243630673e1789e06ae283d",
          "quantity": 2,
          "allowOutOfStock": false,
          "barCode": "",
          "customPricing": false,
          "enableTracking": true,
          "price": 500,
          "cost": 250,
          "sku": "",
          "displayOptions": {
            "color": "green",
            "size": "small"
          },
          "content": "",
          "stockStatus": "IN_STOCK",
          "labels": {
            "overrideStock": false,
            "outOfStock": false,
            "lastPiece": false,
            "preOrder": false
          },
          "images": {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/variants/4a1f301f-d2de-4b01-91b5-637c90f7c67b.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/variants/4a1f301f-d2de-4b01-91b5-637c90f7c67b.jpeg"
          },
          "currency": "EGP",
          "country": "EG"
        },
        {
          "id": "6b7c95533f29ed414962ddd770eb978fa0ad798a87ac6f82f2e792de2640b8e5",
          "quantity": 5,
          "allowOutOfStock": false,
          "barCode": "",
          "customPricing": false,
          "enableTracking": true,
          "price": 500,
          "cost": 250,
          "sku": "",
          "displayOptions": {
            "color": "green",
            "size": "medium"
          },
          "content": "",
          "stockStatus": "IN_STOCK",
          "labels": {
            "overrideStock": false,
            "outOfStock": false,
            "lastPiece": false,
            "preOrder": false
          },
          "images": {
            "originalSize": "",
            "smallSize": ""
          },
          "currency": "EGP",
          "country": "EG"
        },
        {
          "id": "1a76db38c38b5e543623317c4b89431cb3248b9c08cf540b6ec697aa242578f1",
          "quantity": 5,
          "allowOutOfStock": false,
          "barCode": "",
          "customPricing": false,
          "enableTracking": true,
          "price": 500,
          "cost": 250,
          "sku": "",
          "displayOptions": {
            "color": "blue",
            "size": "small"
          },
          "content": "",
          "stockStatus": "IN_STOCK",
          "labels": {
            "overrideStock": false,
            "outOfStock": false,
            "lastPiece": false,
            "preOrder": false
          },
          "images": {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/variants/368338bd-024a-482c-88f0-98fb9e4e6e79.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/variants/368338bd-024a-482c-88f0-98fb9e4e6e79.jpeg"
          },
          "currency": "EGP",
          "country": "EG"
        },
        {
          "id": "2d9191e6d72bc6cf28a19fe0a2b4a09f7fefc8a2bd524289e2696de20680e809",
          "quantity": 5,
          "allowOutOfStock": false,
          "barCode": "",
          "customPricing": false,
          "enableTracking": true,
          "price": 500,
          "cost": 250,
          "sku": "",
          "displayOptions": {
            "color": "blue",
            "size": "medium"
          },
          "content": "",
          "stockStatus": "IN_STOCK",
          "labels": {
            "overrideStock": false,
            "outOfStock": false,
            "lastPiece": false,
            "preOrder": false
          },
          "images": {
            "originalSize": "",
            "smallSize": ""
          },
          "currency": "EGP",
          "country": "EG"
        }
      ],
      "labels": {
        "lastPiece": false,
        "outOfStock": false,
        "onSale": true,
        "preOrder": false
      },
      "seo": {
        "entityId": "84057478",
        "entityType": "product",
        "slug": "/product/84057478",
        "seo": {
          "title": "bundle test product",
          "description": "بكرة الزوج",
          "keywords": [],
          "allowIndexing": true,
          "canonicalUrl": "https://qaf.vondera.io/product/84057478"
        },
        "social": {
          "ogTitle": "bundle test product",
          "ogDescription": "بكرة الزوج",
          "ogImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8-thumbnail.jpg",
          "twitterTitle": "bundle test product",
          "twitterDescription": "بكرة الزوج",
          "twitterImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8-thumbnail.jpg"
        },
        "customHeadHtml": ""
      }
    },
    "simillerProducts": [
      {
        "id": "84057478",
        "name": "bundle test product",
        "price": 500,
        "crossedPrice": 700,
        "mainImage": {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8.jpg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8-thumbnail.jpg"
        },
        "link": "https://qaf.vondera.io/product/84057478",
        "categoryId": "fJnY2GmzJM8LO4p9gFgx",
        "categoryName": "cat",
        "categoryLink": "https://qaf.vondera.io/products/all?category=fJnY2GmzJM8LO4p9gFgx",
        "subCategoryName": "",
        "subCategoryId": "",
        "quantity": 19,
        "isAvailable": true,
        "currency": "EGP",
        "images": [
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8.jpg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84057478/252ba841-35f2-4993-9116-b5b67b6bfba8-thumbnail.jpg"
          },
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/7b3e1eb8-0383-4e8a-8cb2-17e0bf34d571.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/7b3e1eb8-0383-4e8a-8cb2-17e0bf34d571.jpeg"
          },
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/e167a60d-e4cb-445c-bcb2-1f0422686e61.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/e167a60d-e4cb-445c-bcb2-1f0422686e61.jpeg"
          },
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/c8d8a6cc-107f-44a2-9c73-99643f16bd79.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/18736179/c8d8a6cc-107f-44a2-9c73-99643f16bd79.jpeg"
          }
        ],
        "variantsCount": 6,
        "rating": {
          "average": 3,
          "count": 2
        },
        "labels": {
          "lastPiece": false,
          "outOfStock": false,
          "onSale": true,
          "preOrder": false
        }
      },
      {
        "id": "59079680",
        "name": "cat ",
        "price": 100,
        "crossedPrice": 500,
        "mainImage": {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/d4640694-f71e-4e6c-9420-266c9a6024a6.jpeg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/d4640694-f71e-4e6c-9420-266c9a6024a6.jpeg"
        },
        "link": "https://qaf.vondera.io/product/59079680",
        "categoryId": "fJnY2GmzJM8LO4p9gFgx",
        "categoryName": "cat",
        "categoryLink": "https://qaf.vondera.io/products/all?category=fJnY2GmzJM8LO4p9gFgx",
        "subCategoryName": "",
        "subCategoryId": "",
        "quantity": -13,
        "isAvailable": false,
        "currency": "EGP",
        "images": [
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/d4640694-f71e-4e6c-9420-266c9a6024a6.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/d4640694-f71e-4e6c-9420-266c9a6024a6.jpeg"
          },
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/da68f9cd-b5cf-478c-8bc1-1d1248e90349.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/da68f9cd-b5cf-478c-8bc1-1d1248e90349.jpeg"
          },
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/44995abe-0dbd-40f5-a3fb-cf366294be40.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/44995abe-0dbd-40f5-a3fb-cf366294be40.jpeg"
          },
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/a16bb0e9-db15-496a-b927-8689fa728dca.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/a16bb0e9-db15-496a-b927-8689fa728dca.jpeg"
          },
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/c87c1110-6fa1-4072-927a-2c33296eabc8.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/c87c1110-6fa1-4072-927a-2c33296eabc8.jpeg"
          },
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/d29604c3-292b-457c-94f2-06a584907e70.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/d29604c3-292b-457c-94f2-06a584907e70.jpeg"
          },
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/cc3e9065-f1ef-44fa-969e-a0639136e680.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/59079680/cc3e9065-f1ef-44fa-969e-a0639136e680.jpeg"
          }
        ],
        "variantsCount": 40,
        "rating": {
          "average": 0,
          "count": 0
        },
        "labels": {
          "lastPiece": false,
          "outOfStock": true,
          "onSale": true,
          "preOrder": false
        }
      },
      {
        "id": "55167087",
        "name": "asd",
        "price": 1000000,
        "crossedPrice": 10000000000,
        "mainImage": {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/55167087/f269029a-869d-4805-895c-35a95da5d008.jpeg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/55167087/f269029a-869d-4805-895c-35a95da5d008.jpeg"
        },
        "link": "https://qaf.vondera.io/product/55167087",
        "categoryId": "fJnY2GmzJM8LO4p9gFgx",
        "categoryName": "cat",
        "categoryLink": "https://qaf.vondera.io/products/all?category=fJnY2GmzJM8LO4p9gFgx",
        "subCategoryName": "test",
        "subCategoryId": "0mwhDPcH4wTnRLAcwAPH",
        "quantity": 9000,
        "isAvailable": true,
        "currency": "EGP",
        "images": [
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/55167087/f269029a-869d-4805-895c-35a95da5d008.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/55167087/f269029a-869d-4805-895c-35a95da5d008.jpeg"
          }
        ],
        "variantsCount": 9,
        "rating": {
          "average": 0,
          "count": 0
        },
        "labels": {
          "lastPiece": false,
          "outOfStock": false,
          "onSale": true,
          "preOrder": false
        }
      },
      {
        "id": "c3f7b0b2-b960-4f14-bc1b-ec4af9aaa7a7",
        "name": "pinky printed tee",
        "price": 499,
        "crossedPrice": 0,
        "mainImage": {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/c3f7b0b2-b960-4f14-bc1b-ec4af9aaa7a7/c94125b0-9018-4b5d-b6f8-8a52d34805d5.jpg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/c3f7b0b2-b960-4f14-bc1b-ec4af9aaa7a7/c94125b0-9018-4b5d-b6f8-8a52d34805d5-thumbnail.jpg"
        },
        "link": "https://qaf.vondera.io/product/c3f7b0b2-b960-4f14-bc1b-ec4af9aaa7a7",
        "categoryId": "fJnY2GmzJM8LO4p9gFgx",
        "categoryName": "cat",
        "categoryLink": "https://qaf.vondera.io/products/all?category=fJnY2GmzJM8LO4p9gFgx",
        "subCategoryName": "test",
        "subCategoryId": "0mwhDPcH4wTnRLAcwAPH",
        "quantity": 1000,
        "isAvailable": true,
        "currency": "EGP",
        "images": [
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/c3f7b0b2-b960-4f14-bc1b-ec4af9aaa7a7/c94125b0-9018-4b5d-b6f8-8a52d34805d5.jpg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/c3f7b0b2-b960-4f14-bc1b-ec4af9aaa7a7/c94125b0-9018-4b5d-b6f8-8a52d34805d5-thumbnail.jpg"
          }
        ],
        "variantsCount": 0,
        "rating": {
          "average": 0,
          "count": 0
        },
        "labels": {
          "lastPiece": false,
          "outOfStock": false,
          "onSale": false,
          "preOrder": false
        }
      },
      {
        "id": "84764364",
        "name": "we hate niggas",
        "price": 1,
        "crossedPrice": 20,
        "mainImage": {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84764364/deff3273-d11d-4e20-89da-4436f8c0bf90.jpeg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84764364/deff3273-d11d-4e20-89da-4436f8c0bf90-thumbnail.jpeg"
        },
        "link": "https://qaf.vondera.io/product/84764364",
        "categoryId": "fJnY2GmzJM8LO4p9gFgx",
        "categoryName": "cat",
        "categoryLink": "https://qaf.vondera.io/products/all?category=fJnY2GmzJM8LO4p9gFgx",
        "subCategoryName": "",
        "subCategoryId": "",
        "quantity": 1000,
        "isAvailable": true,
        "currency": "EGP",
        "images": [
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84764364/deff3273-d11d-4e20-89da-4436f8c0bf90.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/84764364/deff3273-d11d-4e20-89da-4436f8c0bf90-thumbnail.jpeg"
          }
        ],
        "variantsCount": 0,
        "rating": {
          "average": 0,
          "count": 0
        },
        "labels": {
          "lastPiece": false,
          "outOfStock": false,
          "onSale": true,
          "preOrder": false
        }
      },
      {
        "id": "79118364",
        "name": "we hate niggas",
        "price": 1,
        "crossedPrice": 20,
        "mainImage": {
          "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/79118364/7b0cfed4-51c7-43c2-b8ae-915eb83bbf32.jpeg",
          "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/79118364/7b0cfed4-51c7-43c2-b8ae-915eb83bbf32-thumbnail.jpeg"
        },
        "link": "https://qaf.vondera.io/product/79118364",
        "categoryId": "fJnY2GmzJM8LO4p9gFgx",
        "categoryName": "cat",
        "categoryLink": "https://qaf.vondera.io/products/all?category=fJnY2GmzJM8LO4p9gFgx",
        "subCategoryName": "",
        "subCategoryId": "",
        "quantity": 1000,
        "isAvailable": true,
        "currency": "EGP",
        "images": [
          {
            "originalSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/79118364/7b0cfed4-51c7-43c2-b8ae-915eb83bbf32.jpeg",
            "smallSize": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/79118364/7b0cfed4-51c7-43c2-b8ae-915eb83bbf32-thumbnail.jpeg"
          }
        ],
        "variantsCount": 0,
        "rating": {
          "average": 0,
          "count": 0
        },
        "labels": {
          "lastPiece": false,
          "outOfStock": false,
          "onSale": true,
          "preOrder": false
        }
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» product|object|true|none||none|
|»»» id|string|true|none||none|
|»»» name|string|true|none||none|
|»»» isWished|boolean|true|none||none|
|»»» description|string|true|none||none|
|»»» price|integer|true|none||none|
|»»» isDigital|boolean|true|none||none|
|»»» bundles|[object]|true|none||none|
|»»»» title|string|true|none||none|
|»»»» quantity|integer|true|none||none|
|»»»» price|integer|true|none||none|
|»»»» id|string|true|none||none|
|»»» hasBundles|boolean|true|none||none|
|»»» sections|[any]|true|none||none|
|»»» crossedPrice|integer|true|none||none|
|»»» mainImage|object|true|none||none|
|»»»» originalSize|string|true|none||none|
|»»»» smallSize|string|true|none||none|
|»»» link|string|true|none||none|
|»»» categoryId|string|true|none||none|
|»»» categoryName|string|true|none||none|
|»»» categoryLink|string|true|none||none|
|»»» subCategoryName|string|true|none||none|
|»»» subCategoryId|string|true|none||none|
|»»» sku|string|true|none||none|
|»»» priority|integer|true|none||none|
|»»» quantity|integer|true|none||none|
|»»» isAvailable|boolean|true|none||none|
|»»» currency|string|true|none||none|
|»»» country|string|true|none||none|
|»»» images|[object]|true|none||none|
|»»»» originalSize|string|true|none||none|
|»»»» smallSize|string|true|none||none|
|»»» isFeatured|boolean|true|none||none|
|»»» rating|object|true|none||none|
|»»»» average|integer|true|none||none|
|»»»» count|integer|true|none||none|
|»»» variantsDisplay|object|true|none||none|
|»»»» color|[string]|true|none||none|
|»»»» size|[string]|true|none||none|
|»»» variantsSettings|[object]|true|none||none|
|»»»» id|string|true|none||none|
|»»»» quantity|integer|true|none||none|
|»»»» allowOutOfStock|boolean|true|none||none|
|»»»» barCode|string|true|none||none|
|»»»» customPricing|boolean|true|none||none|
|»»»» enableTracking|boolean|true|none||none|
|»»»» price|integer|true|none||none|
|»»»» cost|integer|true|none||none|
|»»»» sku|string|true|none||none|
|»»»» displayOptions|object|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» size|string|true|none||none|
|»»»» content|string|true|none||none|
|»»»» stockStatus|string|true|none||none|
|»»»» labels|object|true|none||none|
|»»»»» overrideStock|boolean|true|none||none|
|»»»»» outOfStock|boolean|true|none||none|
|»»»»» lastPiece|boolean|true|none||none|
|»»»»» preOrder|boolean|true|none||none|
|»»»» images|object|true|none||none|
|»»»»» originalSize|string|true|none||none|
|»»»»» smallSize|string|true|none||none|
|»»»» currency|string|true|none||none|
|»»»» country|string|true|none||none|
|»»» labels|object|true|none||none|
|»»»» lastPiece|boolean|true|none||none|
|»»»» outOfStock|boolean|true|none||none|
|»»»» onSale|boolean|true|none||none|
|»»»» preOrder|boolean|true|none||none|
|»»» seo|object|true|none||none|
|»»»» entityId|string|true|none||none|
|»»»» entityType|string|true|none||none|
|»»»» slug|string|true|none||none|
|»»»» seo|object|true|none||none|
|»»»»» title|string|true|none||none|
|»»»»» description|string|true|none||none|
|»»»»» keywords|[any]|true|none||none|
|»»»»» allowIndexing|boolean|true|none||none|
|»»»»» canonicalUrl|string|true|none||none|
|»»»» social|object|true|none||none|
|»»»»» ogTitle|string|true|none||none|
|»»»»» ogDescription|string|true|none||none|
|»»»»» ogImage|string|true|none||none|
|»»»»» twitterTitle|string|true|none||none|
|»»»»» twitterDescription|string|true|none||none|
|»»»»» twitterImage|string|true|none||none|
|»»»» customHeadHtml|string|true|none||none|
|»» simillerProducts|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» name|string|true|none||none|
|»»» price|integer|true|none||none|
|»»» crossedPrice|integer|true|none||none|
|»»» mainImage|object|true|none||none|
|»»»» originalSize|string|true|none||none|
|»»»» smallSize|string|true|none||none|
|»»» link|string|true|none||none|
|»»» categoryId|string|true|none||none|
|»»» categoryName|string|true|none||none|
|»»» categoryLink|string|true|none||none|
|»»» subCategoryName|string|true|none||none|
|»»» subCategoryId|string|true|none||none|
|»»» quantity|integer|true|none||none|
|»»» isAvailable|boolean|true|none||none|
|»»» currency|string|true|none||none|
|»»» images|[object]|true|none||none|
|»»»» originalSize|string|true|none||none|
|»»»» smallSize|string|true|none||none|
|»»» variantsCount|integer|true|none||none|
|»»» rating|object|true|none||none|
|»»»» average|integer|true|none||none|
|»»»» count|integer|true|none||none|
|»»» labels|object|true|none||none|
|»»»» lastPiece|boolean|true|none||none|
|»»»» outOfStock|boolean|true|none||none|
|»»»» onSale|boolean|true|none||none|
|»»»» preOrder|boolean|true|none||none|

## GET Get Featured

GET /products/featured

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|fullDate|query|string| no |true, false -> Default is false|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": "1441",
    "description": "TESTING ",
    "price": 700,
    "mainImage": {
      "small": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1441/c8073995-cdde-4f5c-858f-c11e2e3ae9ca.jpg",
      "large": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1441/c8073995-cdde-4f5c-858f-c11e2e3ae9ca.jpg"
    },
    "variantsDisplay": {
      "Size": [
        "S",
        "l",
        "M"
      ]
    },
    "variantsSettings": {},
    "images": [
      "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/lcvPuRAIVVUnRcZpttlPsRPLqoY2/products/1441/c8073995-cdde-4f5c-858f-c11e2e3ae9ca.jpg",
      "https://vondera-bucket.s3.amazonaws.com/products/1441//2743.jpg"
    ],
    "link": "https://qotoofs.vondera.shop/product/1441",
    "categoryName": "Pants",
    "categoryLink": "https://qotoofs.vondera.shop/products/all?category=FduUM6bHJHXOEfbPxXaM",
    "subCategoryName": "",
    "subCategoryId": "",
    "isAvailable": true,
    "currency": "EGP",
    "country": "EG"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» description|string|true|none||none|
|»» price|integer|true|none||none|
|»» mainImage|object|true|none||none|
|»»» small|string|true|none||none|
|»»» large|string|true|none||none|
|»» variantsDisplay|object|true|none||none|
|»»» Size|[string]|true|none||none|
|»» variantsSettings|object|true|none||none|
|»» images|[string]|true|none||none|
|»» link|string|true|none||none|
|»» categoryName|string|true|none||none|
|»» categoryLink|string|true|none||none|
|»» subCategoryName|string|true|none||none|
|»» subCategoryId|string|true|none||none|
|»» isAvailable|boolean|true|none||none|
|»» currency|string|true|none||none|
|»» country|string|true|none||none|

## GET Product Reviews

GET /products/{id}/review

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|pageNo|query|string| yes |none|
|limit|query|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "items": [
      {
        "id": "01Wx0LFpEX7jsgnfiQBa",
        "rating": 3,
        "name": "tes",
        "email": "test@test.com",
        "review": "sadasd\n",
        "date": {
          "_seconds": 1730630451,
          "_nanoseconds": 163000000
        },
        "productId": "2974"
      },
      {
        "id": "CJfiRY7WeiDft8o6BIsZ",
        "rating": 3,
        "name": "tes",
        "email": "test@test.com",
        "review": "sadasd\n",
        "date": {
          "_seconds": 1730630493,
          "_nanoseconds": 853000000
        },
        "productId": "2974"
      },
      {
        "id": "Mqn1TjOxXnhJ9zoymiok",
        "rating": 1,
        "name": "test",
        "email": "test@testing.com",
        "review": "sadasd",
        "date": {
          "_seconds": 1730630571,
          "_nanoseconds": 218000000
        },
        "productId": "2974"
      },
      {
        "id": "VtK7x6CgmohfqXlQfOxP",
        "rating": 3,
        "name": "tes",
        "email": "test@test.com",
        "review": "sadasd\n",
        "date": {
          "_seconds": 1730630497,
          "_nanoseconds": 123000000
        },
        "productId": "2974"
      },
      {
        "id": "ecu0TTzSbdW7oHyprYsT",
        "rating": 5,
        "name": "tts",
        "email": "test66@email.com",
        "review": "sadsad",
        "date": {
          "_seconds": 1730629300,
          "_nanoseconds": 632000000
        },
        "productId": "2974"
      }
    ],
    "isLastPage": false,
    "nextPageNumber": 2,
    "currentPage": 1,
    "totalPages": 2
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» items|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» rating|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» email|string|true|none||none|
|»»» review|string|true|none||none|
|»»» date|object|true|none||none|
|»»»» _seconds|integer|true|none||none|
|»»»» _nanoseconds|integer|true|none||none|
|»»» productId|string|true|none||none|
|»» isLastPage|boolean|true|none||none|
|»» nextPageNumber|integer|true|none||none|
|»» currentPage|integer|true|none||none|
|»» totalPages|integer|true|none||none|

## POST Add Review

POST /products/{id}/review

> Body Parameters

```json
"{\n    \"rating\": 5,\n    \"review\": \"This is the review\",\n    \"email\": \"armjldtrainer@gmail.com\",\n    \"name\": \"Shrief El Sayed\",\n    \"imagesBase64\": [\"\"] // Optional list of base 64 images, max length is 3\n}"
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» rating|body|integer| yes |none|
|» review|body|string| yes |none|
|» email|body|string| yes |none|
|» name|body|string| yes |none|
|» imagesBase64|body|[string]| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Review added successfully",
  "data": {
    "date": "2024-12-16T17:31:28.348Z",
    "productId": "2974",
    "rating": 5,
    "review": "This is the review",
    "name": "Shrief El Sayed",
    "email": "armjldtrainer@gmail.com",
    "id": "BXzbcfWEnUIUtgQ9o90E"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» date|string|true|none||none|
|»» productId|string|true|none||none|
|»» rating|integer|true|none||none|
|»» review|string|true|none||none|
|»» name|string|true|none||none|
|»» email|string|true|none||none|
|»» id|string|true|none||none|

# Ecommerce/Categories

## GET Get Categories

GET /category

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|language|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": [
    {
      "id": "5t2GpBqTZsIF1Hd1l1kP",
      "name": "test",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/5t2GpBqTZsIF1Hd1l1kP",
      "link": "https://qaf.vondera.shop/products/all?category=5t2GpBqTZsIF1Hd1l1kP",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "HhHcpkxslN68rlVWZC3V",
      "name": "Shorts",
      "description": "",
      "image": "https://firebasestorage.googleapis.com/v0/b/brands-61c3d.appspot.com/o/stores%2FW9DhSs7ZbZc9czcsYMr0WtqOCdy2%2FShorts.jpg?alt=media&token=f3457fca-eada-48ea-9245-cfd153a4be9b",
      "link": "https://qaf.vondera.shop/products/all?category=HhHcpkxslN68rlVWZC3V",
      "subCategories": [
        {
          "id": "3CNqb4xjap3wufTo1cot",
          "categoryId": "HhHcpkxslN68rlVWZC3V",
          "sortValue": 2,
          "name": "Sub Collection2",
          "productCount": 0
        },
        {
          "id": "SRulSSf8Bf3NmLTTOZjK",
          "categoryId": "HhHcpkxslN68rlVWZC3V",
          "name": "test yh55 edit",
          "sortValue": 3,
          "productCount": 0
        },
        {
          "id": "ZFPSJWDNzPbVuG3Owger",
          "name": "Test 2",
          "categoryId": "HhHcpkxslN68rlVWZC3V",
          "sortValue": 0,
          "productCount": 0
        }
      ],
      "productsCount": 1
    },
    {
      "id": "HklkHqUm1tSREBkwK3BF",
      "name": "test add 7 edit 2",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/HklkHqUm1tSREBkwK3BF",
      "link": "https://qaf.vondera.shop/products/all?category=HklkHqUm1tSREBkwK3BF",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "JMFPSvywT55buThTaUUD",
      "name": "test add2",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/JMFPSvywT55buThTaUUD",
      "link": "https://qaf.vondera.shop/products/all?category=JMFPSvywT55buThTaUUD",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "KQBlDKksauyT4PuBGX3u",
      "name": "Backbag",
      "description": "Test Desccc",
      "image": "https://firebasestorage.googleapis.com/v0/b/brands-61c3d.appspot.com/o/stores%2FW9DhSs7ZbZc9czcsYMr0WtqOCdy2%2FBackbag.jpg?alt=media&token=62fa5f5e-d39b-48f2-90d0-d2535906aef5",
      "link": "https://qaf.vondera.shop/products/all?category=KQBlDKksauyT4PuBGX3u",
      "subCategories": [],
      "productsCount": 6
    },
    {
      "id": "NbHfF5EPhjwUIfW0esiu",
      "name": "test add4",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/NbHfF5EPhjwUIfW0esiu",
      "link": "https://qaf.vondera.shop/products/all?category=NbHfF5EPhjwUIfW0esiu",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "QHtkjiAz2Ac43WgbquoO",
      "name": "test",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/QHtkjiAz2Ac43WgbquoO",
      "link": "https://qaf.vondera.shop/products/all?category=QHtkjiAz2Ac43WgbquoO",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "T5tQ2PpTYMP6oMDvWz2O",
      "name": "test",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/T5tQ2PpTYMP6oMDvWz2O",
      "link": "https://qaf.vondera.shop/products/all?category=T5tQ2PpTYMP6oMDvWz2O",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "YAed4ckxnYHIT2NwV4lm",
      "name": "Sleeves",
      "description": "",
      "image": "https://firebasestorage.googleapis.com/v0/b/brands-61c3d.appspot.com/o/stores%2FW9DhSs7ZbZc9czcsYMr0WtqOCdy2%2FSleeves.jpg?alt=media&token=3dc38f55-c323-4480-b99d-43ebd18ee076",
      "link": "https://qaf.vondera.shop/products/all?category=YAed4ckxnYHIT2NwV4lm",
      "subCategories": [
        {
          "id": "ndqDDCD7eF0I7nnGXsj0",
          "name": "test 79",
          "categoryId": "YAed4ckxnYHIT2NwV4lm",
          "sortValue": 5,
          "productCount": 2
        }
      ],
      "productsCount": 5
    },
    {
      "id": "Z1uphT9hRYyzOPPjbzjV",
      "name": "test",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/Z1uphT9hRYyzOPPjbzjV",
      "link": "https://qaf.vondera.shop/products/all?category=Z1uphT9hRYyzOPPjbzjV",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "gQH6KHumoMx5r3OupIti",
      "name": "test add 3",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/gQH6KHumoMx5r3OupIti",
      "link": "https://qaf.vondera.shop/products/all?category=gQH6KHumoMx5r3OupIti",
      "subCategories": [
        {
          "id": "ek3QcchtJLKWoqUO5mYY",
          "name": "test 55",
          "categoryId": "gQH6KHumoMx5r3OupIti",
          "sortValue": 12,
          "productCount": 0
        }
      ],
      "productsCount": 1
    },
    {
      "id": "h9TVYR9AX2U8vRIMqmBr",
      "name": "test",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/h9TVYR9AX2U8vRIMqmBr",
      "link": "https://qaf.vondera.shop/products/all?category=h9TVYR9AX2U8vRIMqmBr",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "pFRanfGlmHvZKKDf3M8v",
      "name": "test add",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/pFRanfGlmHvZKKDf3M8v",
      "link": "https://qaf.vondera.shop/products/all?category=pFRanfGlmHvZKKDf3M8v",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "pPfCLjbDU0a334VoskKO",
      "name": "test add edit",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/pPfCLjbDU0a334VoskKO",
      "link": "https://qaf.vondera.shop/products/all?category=pPfCLjbDU0a334VoskKO",
      "subCategories": [
        {
          "id": "0x2mvy2j2ziQKKDrWXmn",
          "name": "test 2",
          "categoryId": "pPfCLjbDU0a334VoskKO",
          "sortValue": 12,
          "productCount": 0
        },
        {
          "id": "XbaNo9OADo8TZFPVtSHO",
          "name": "test",
          "categoryId": "pPfCLjbDU0a334VoskKO",
          "sortValue": 12,
          "productCount": 0
        }
      ],
      "productsCount": 0
    },
    {
      "id": "qT9a0zBLNFRID2kkWBkW",
      "name": "test add 5",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/qT9a0zBLNFRID2kkWBkW",
      "link": "https://qaf.vondera.shop/products/all?category=qT9a0zBLNFRID2kkWBkW",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "s0H922Mqn2cDMo8bY2jN",
      "name": "category test",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/s0H922Mqn2cDMo8bY2jN",
      "link": "https://qaf.vondera.shop/products/all?category=s0H922Mqn2cDMo8bY2jN",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "u2QP8ybKR9aoAppBdUMV",
      "name": "test 6546",
      "description": "",
      "image": "https://vondera-bucket.s3.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/u2QP8ybKR9aoAppBdUMV",
      "link": "https://qaf.vondera.shop/products/all?category=u2QP8ybKR9aoAppBdUMV",
      "subCategories": [],
      "productsCount": 0
    },
    {
      "id": "uliSLHdlErMc0CM3sSsg",
      "name": "new ",
      "description": "",
      "image": "https://firebasestorage.googleapis.com/v0/b/brands-61c3d.appspot.com/o/stores%2FW9DhSs7ZbZc9czcsYMr0WtqOCdy2%2Fnew%20.jpg?alt=media&token=8fca52c5-b144-4cce-b20e-04d4b6e5807b",
      "link": "https://qaf.vondera.shop/products/all?category=uliSLHdlErMc0CM3sSsg",
      "subCategories": [
        {
          "id": "15VJPngBARjriim8lo9i",
          "categoryId": "uliSLHdlErMc0CM3sSsg",
          "sortValue": 0,
          "name": "test 100",
          "productCount": 1
        },
        {
          "id": "Hzf9LUM6lvXhlauo3Lj4",
          "categoryId": "uliSLHdlErMc0CM3sSsg",
          "name": "Dads",
          "sortValue": 2,
          "productCount": 0
        },
        {
          "id": "uqhmkz85pM9eTT3wFKLu",
          "categoryId": "uliSLHdlErMc0CM3sSsg",
          "name": "test 5555",
          "sortValue": 1,
          "productCount": 0
        }
      ],
      "productsCount": 11
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» id|string|true|none||none|
|»» name|string|true|none||none|
|»» description|string|true|none||none|
|»» image|string|true|none||none|
|»» link|string|true|none||none|
|»» subCategories|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» categoryId|string|true|none||none|
|»»» sortValue|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» productCount|integer|true|none||none|
|»» productsCount|integer|true|none||none|

## GET Get Single Category

GET /category/single/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": "snPhIzmmY2on1jCBhYc9",
    "name": "testtt",
    "description": "1231431dwa",
    "image": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/snPhIzmmY2on1jCBhYc9/preview.jpg",
    "link": "https://qaf.vondera.io/products/all?category=snPhIzmmY2on1jCBhYc9",
    "productsCount": 2,
    "subCategories": [
      {
        "id": "SWK2AmHPPQZiXSQPTUCt",
        "categoryId": "snPhIzmmY2on1jCBhYc9",
        "productsCount": 0,
        "name": "test123",
        "description": "test123",
        "sortIndex": 29,
        "productCount": 2
      },
      {
        "id": "Ru4bIlQxATHatiGVpgES",
        "categoryId": "snPhIzmmY2on1jCBhYc9",
        "productsCount": 0,
        "name": "ttt",
        "description": "tttt",
        "sortIndex": 31,
        "productCount": 0
      },
      {
        "id": "xzqkJFwRDYt5TdG2CtJ9",
        "categoryId": "snPhIzmmY2on1jCBhYc9",
        "productsCount": 0,
        "name": "shsgs",
        "sortIndex": 33,
        "productCount": 0
      }
    ],
    "seoData": {
      "entityId": "snPhIzmmY2on1jCBhYc9",
      "entityType": "category",
      "slug": "/products/all?category=snPhIzmmY2on1jCBhYc9",
      "seo": {
        "title": "testtt",
        "description": "1231431dwa",
        "keywords": [],
        "allowIndexing": true,
        "canonicalUrl": "https://qaf.vondera.io/products/all?category=snPhIzmmY2on1jCBhYc9"
      },
      "social": {
        "ogTitle": "testtt",
        "ogDescription": "1231431dwa",
        "ogImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/snPhIzmmY2on1jCBhYc9/preview.jpg",
        "twitterTitle": "testtt",
        "twitterDescription": "1231431dwa",
        "twitterImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/categories/snPhIzmmY2on1jCBhYc9/preview.jpg"
      },
      "customHeadHtml": ""
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» name|string|true|none||none|
|»» description|string|true|none||none|
|»» image|string|true|none||none|
|»» link|string|true|none||none|
|»» productsCount|integer|true|none||none|
|»» subCategories|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» categoryId|string|true|none||none|
|»»» productsCount|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» description|string|true|none||none|
|»»» sortIndex|integer|true|none||none|
|»»» productCount|integer|true|none||none|
|»» seoData|object|true|none||none|
|»»» entityId|string|true|none||none|
|»»» entityType|string|true|none||none|
|»»» slug|string|true|none||none|
|»»» seo|object|true|none||none|
|»»»» title|string|true|none||none|
|»»»» description|string|true|none||none|
|»»»» keywords|[any]|true|none||none|
|»»»» allowIndexing|boolean|true|none||none|
|»»»» canonicalUrl|string|true|none||none|
|»»» social|object|true|none||none|
|»»»» ogTitle|string|true|none||none|
|»»»» ogDescription|string|true|none||none|
|»»»» ogImage|string|true|none||none|
|»»»» twitterTitle|string|true|none||none|
|»»»» twitterDescription|string|true|none||none|
|»»»» twitterImage|string|true|none||none|
|»»» customHeadHtml|string|true|none||none|

# Ecommerce/Order

## POST Create Order

POST /orders

> Body Parameters

```json
"{\n    \"name\": \"Shrief\",\n    \"phone\": \"1020759697\",\n    \"otherPhone\": \"\",\n    \"countryCode\": \"+20\",\n    \"email\": \"\",\n    \"address\": \"Asia St\",\n    \"cityId\": \"360631\",\n    \"country\": \"\",\n    \"notes\": \"\",\n    \"paymentMethod\": \"GATEWAY\", // MANUAL,\n    \"manualPaymentMethodId\": \"\", // in case of manual\n    //\"receiptImage\": \"\", // base64 image in case of manual\n    \"discountCode\": \"FREE\",\n    \"products\": [\n        {\n            \"id\": \"67094156\",\n            \"name\": \"test images\",\n            \"quantity\": 2,\n            \"price\": 400,\n            \"variantId\": \"\",\n            \"type\": \"PRODUCT\"\n        }\n    ],\n    \"pickupMethod\": \"SHIPPING\"\n}"
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» phone|body|string| yes |none|
|» otherPhone|body|string| yes |none|
|» countryCode|body|string| yes |none|
|» email|body|string| yes |none|
|» address|body|string| yes |none|
|» cityId|body|string| yes |none|
|» country|body|string| yes |none|
|» notes|body|string| yes |none|
|» paymentMethod|body|string| yes |none|
|» manualPaymentMethodId|body|string| yes |none|
|» discountCode|body|string| yes |none|
|» products|body|[object]| yes |none|
|»» id|body|string| no |none|
|»» name|body|string| no |none|
|»» quantity|body|integer| no |none|
|»» price|body|integer| no |none|
|»» variantId|body|string| no |none|
|»» type|body|string| no |none|
|» pickupMethod|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Order added",
  "data": {
    "id": "74022728",
    "date": {
      "_seconds": 1769738846,
      "_nanoseconds": 907000000
    },
    "status": "Pending",
    "isMasked": false,
    "pickupMethod": "SHIPPING",
    "attachmentsCount": 0,
    "link": "https://qaf.vondera.io/order-summary/74022728",
    "marketPlaceId": "ecommerce",
    "productsCount": 1,
    "country": "EG",
    "discountCode": "",
    "products": [
      {
        "id": "77000899",
        "name": "test images",
        "variantId": "40437780c6281bc09e00bb7f0a0e12cb41e01f49116d887930ad454464ad7e6a",
        "bundleId": null,
        "bundleVariants": null,
        "link": "https://qaf.vondera.io/product/77000899",
        "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/77000899/4b929005-cf98-4832-beb0-1f4f5b99f759.jpeg",
        "cost": 0,
        "itemPrice": 400,
        "sku": "",
        "quantity": 1,
        "totalPrice": 400,
        "variantDisplay": {
          "size": "37"
        },
        "content": "",
        "type": "PRODUCT"
      }
    ],
    "payment": {
      "gateway": "MANUAL",
      "method": "InstaPay",
      "paymentStatus": "PENDING",
      "productsPrice": 400,
      "shippingFees": 50,
      "discount": 0,
      "currency": "EGP",
      "taxes": 0,
      "gatewayFees": 45,
      "totalPrice": 495,
      "paidAmount": 0,
      "remainingAmount": 495
    },
    "customer": {
      "name": "fdsfdsfds",
      "phone": "1114077125",
      "email": "gdfss@gmail.com",
      "countryCode": "+2",
      "otherPhone": "",
      "address": "fdsfdsfdsd",
      "gov": "Alexandria",
      "cityId": "361059"
    },
    "courier": null
  }
}
```

> 303 Response

```json
{
  "status": 303,
  "message": "Redirect to payment gateway",
  "data": {
    "link": "https://checkout.kashier.io/?merchantId=MID-21937-414&orderId=rebktasi&mode=live&amount=51&currency=EGP&hash=90fb0820f374d3d50e19a2f9f3703065cfe38f8df6024dca7a5ccebca694313e&metaData={\"storeId\":\"W9DhSs7ZbZc9czcsYMr0WtqOCdy2\",\"isDeposit\":\"true\"}&merchantRedirect=https%3A%2F%2Fqaf.vondera.shop%2Forder-summary%2Frebktasi&failureRedirect=https%3A%2F%2Fqaf.vondera.shop%2Fcheckout&allowedMethods=card,wallet,fawry&failureRedirect=false&redirectMethod=post&brandColor=%23673ab7&display=en&serverWebhook=https://us-central1-brands-61c3d.cloudfunctions.net/vpay-onVPayCardTransactionSuccess",
    "amount": 580
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|303|[See Other](https://tools.ietf.org/html/rfc7231#section-6.4.4)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» date|object|true|none||none|
|»»» _seconds|integer|true|none||none|
|»»» _nanoseconds|integer|true|none||none|
|»» status|string|true|none||none|
|»» isMasked|boolean|true|none||none|
|»» pickupMethod|string|true|none||none|
|»» attachmentsCount|integer|true|none||none|
|»» link|string|true|none||none|
|»» marketPlaceId|string|true|none||none|
|»» productsCount|integer|true|none||none|
|»» country|string|true|none||none|
|»» discountCode|string|true|none||none|
|»» products|[object]|true|none||none|
|»»» id|string|false|none||none|
|»»» name|string|false|none||none|
|»»» variantId|string|false|none||none|
|»»» bundleId|null|false|none||none|
|»»» bundleVariants|null|false|none||none|
|»»» link|string|false|none||none|
|»»» previewImage|string|false|none||none|
|»»» cost|integer|false|none||none|
|»»» itemPrice|integer|false|none||none|
|»»» sku|string|false|none||none|
|»»» quantity|integer|false|none||none|
|»»» totalPrice|integer|false|none||none|
|»»» variantDisplay|object|false|none||none|
|»»»» size|string|true|none||none|
|»»» content|string|false|none||none|
|»»» type|string|false|none||none|
|»» payment|object|true|none||none|
|»»» gateway|string|true|none||none|
|»»» method|string|true|none||none|
|»»» paymentStatus|string|true|none||none|
|»»» productsPrice|integer|true|none||none|
|»»» shippingFees|integer|true|none||none|
|»»» discount|integer|true|none||none|
|»»» currency|string|true|none||none|
|»»» taxes|integer|true|none||none|
|»»» gatewayFees|integer|true|none||none|
|»»» totalPrice|integer|true|none||none|
|»»» paidAmount|integer|true|none||none|
|»»» remainingAmount|integer|true|none||none|
|»» customer|object|true|none||none|
|»»» name|string|true|none||none|
|»»» phone|string|true|none||none|
|»»» email|string|true|none||none|
|»»» countryCode|string|true|none||none|
|»»» otherPhone|string|true|none||none|
|»»» address|string|true|none||none|
|»»» gov|string|true|none||none|
|»»» cityId|string|true|none||none|
|»» courier|null|true|none||none|

HTTP Status Code **303**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» link|string|true|none||none|
|»» amount|integer|true|none||none|

## GET Get Order By Id

GET /orders/single/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": "89249197",
    "date": {
      "_seconds": 1724866399,
      "_nanoseconds": 743000000
    },
    "status": "Delivered",
    "attachmentsCount": 0,
    "marketPlaceId": "ecommerce",
    "productsCount": 1,
    "discountCode": "",
    "products": [
      {
        "id": "9182",
        "name": "happy",
        "variantId": "fc5ca0aa92aa07cc538d0af16ec487d534c6abf73a3ec24763582868be230eb9",
        "link": "https://qaf.vondera.shop/product/9182",
        "previewImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/9182/eeafc0f2-a3dd-4b0d-80f5-036e38d9a05f.jpg",
        "itemPrice": 800,
        "quantity": 1,
        "totalPrice": 800,
        "variantDisplay": {
          "Sizes": "Medium",
          "Colors": "White"
        }
      }
    ],
    "payment": {
      "gateway": "COD",
      "method": "COD",
      "paymentStatus": "PAID",
      "productsPrice": 800,
      "shippingFees": 80,
      "discount": 0,
      "totalPrice": 880,
      "paidAmount": 880,
      "remainingAmount": 0
    },
    "customer": {
      "name": "Yossef Mohamed abdelmohsen",
      "phone": "01151784019",
      "email": "yossefmohamed112233@gmail.com",
      "otherPhone": "",
      "address": "imbab, giza",
      "gov": "القاهرة"
    },
    "courier": {
      "name": "",
      "id": ""
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» date|object|true|none||none|
|»»» _seconds|integer|true|none||none|
|»»» _nanoseconds|integer|true|none||none|
|»» status|string|true|none||none|
|»» attachmentsCount|integer|true|none||none|
|»» marketPlaceId|string|true|none||none|
|»» productsCount|integer|true|none||none|
|»» discountCode|string|true|none||none|
|»» products|[object]|true|none||none|
|»»» id|string|false|none||none|
|»»» name|string|false|none||none|
|»»» variantId|string|false|none||none|
|»»» link|string|false|none||none|
|»»» previewImage|string|false|none||none|
|»»» itemPrice|integer|false|none||none|
|»»» quantity|integer|false|none||none|
|»»» totalPrice|integer|false|none||none|
|»»» variantDisplay|object|false|none||none|
|»»»» Sizes|string|true|none||none|
|»»»» Colors|string|true|none||none|
|»» payment|object|true|none||none|
|»»» gateway|string|true|none||none|
|»»» method|string|true|none||none|
|»»» paymentStatus|string|true|none||none|
|»»» productsPrice|integer|true|none||none|
|»»» shippingFees|integer|true|none||none|
|»»» discount|integer|true|none||none|
|»»» totalPrice|integer|true|none||none|
|»»» paidAmount|integer|true|none||none|
|»»» remainingAmount|integer|true|none||none|
|»» customer|object|true|none||none|
|»»» name|string|true|none||none|
|»»» phone|string|true|none||none|
|»»» email|string|true|none||none|
|»»» otherPhone|string|true|none||none|
|»»» address|string|true|none||none|
|»»» gov|string|true|none||none|
|»» courier|object|true|none||none|
|»»» name|string|true|none||none|
|»»» id|string|true|none||none|

# Ecommerce/Custom Pages

## GET Get All

GET /custompages/

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": [
    {
      "id": "privacy",
      "body": "",
      "title": "Privacy Policy",
      "link": "https://qotoofs.vondera.shop/pages/privacy"
    },
    {
      "id": "returnpolicy",
      "body": "<p>All orders can be replaced within 14 days.</p><p>We don't offer refunds.</p><p>If you want to change a size you will pay for the delivery fees, if we had a problem within our side you will get a free replacment in 2 - 4 days</p>",
      "title": "Return Policy",
      "link": "https://qotoofs.vondera.shop/pages/returnpolicy"
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» id|string|true|none||none|
|»» body|string|true|none||none|
|»» title|string|true|none||none|
|»» link|string|true|none||none|

## GET Get Custom Page

GET /custompages/single/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": "testast",
    "body": "<h1><strong class=\"ql-font-serif ql-size-huge\" style=\"color: rgb(230, 0, 0);\">asdasd</strong></h1><p><span style=\"background-color: rgb(230, 0, 0); color: rgb(255, 255, 255);\" class=\"ql-size-large\">xoxoxoxo</span></p><p><img src=\"data:image/jpeg;base64,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\"></p>",
    "title": "testast",
    "link": "https://qaf.vondera.io/pages/testast",
    "seoData": {
      "entityId": "testast",
      "entityType": "customPage",
      "slug": "/pages/testast",
      "seo": {
        "title": "testast",
        "description": "asdasdxoxoxoxo",
        "keywords": [],
        "allowIndexing": true,
        "canonicalUrl": "https://qaf.vondera.io/pages/testast"
      },
      "social": {
        "ogTitle": "testast",
        "ogDescription": "asdasdxoxoxoxo",
        "ogImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/33168834/10355b43-c9b3-4d9b-b3bb-f65c29918eb4.jpeg",
        "twitterTitle": "testast",
        "twitterDescription": "asdasdxoxoxoxo",
        "twitterImage": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/33168834/10355b43-c9b3-4d9b-b3bb-f65c29918eb4.jpeg"
      }
    }
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» body|string|true|none||none|
|»» title|string|true|none||none|
|»» link|string|true|none||none|
|»» seoData|object|true|none||none|
|»»» entityId|string|true|none||none|
|»»» entityType|string|true|none||none|
|»»» slug|string|true|none||none|
|»»» seo|object|true|none||none|
|»»»» title|string|true|none||none|
|»»»» description|string|true|none||none|
|»»»» keywords|[any]|true|none||none|
|»»»» allowIndexing|boolean|true|none||none|
|»»»» canonicalUrl|string|true|none||none|
|»»» social|object|true|none||none|
|»»»» ogTitle|string|true|none||none|
|»»»» ogDescription|string|true|none||none|
|»»»» ogImage|string|true|none||none|
|»»»» twitterTitle|string|true|none||none|
|»»»» twitterDescription|string|true|none||none|
|»»»» twitterImage|string|true|none||none|

# Ecommerce/Cart

## GET Get Cart

GET /cart

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|language|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Cart fetched successfully",
  "data": {
    "items": [
      {
        "id": "89914259",
        "name": "digital product",
        "image": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/89914259/7f95c050-607c-410c-925a-cb00188d7eca-thumbnail.jpg",
        "categoryName": "Test Category",
        "subCategoryName": "",
        "currency": "EGP",
        "link": "https://qaf.vondera.shop/product/89914259",
        "isDigital": true,
        "variantId": "7f0907b99ea07a5ab35fc640b56b8f756e561bf122fdd95c12a80bbaea7e7410",
        "variantDisplay": {
          "Colors": "Red"
        },
        "quantity": 3,
        "maxQuantity": 997,
        "price": 5,
        "totalPrice": 15
      }
    ],
    "totalPrice": 15,
    "currency": "EGP",
    "totalQuantity": 3,
    "productsCount": 1
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» items|[object]|true|none||none|
|»»» id|string|false|none||none|
|»»» name|string|false|none||none|
|»»» image|string|false|none||none|
|»»» categoryName|string|false|none||none|
|»»» subCategoryName|string|false|none||none|
|»»» currency|string|false|none||none|
|»»» link|string|false|none||none|
|»»» isDigital|boolean|false|none||none|
|»»» variantId|string|false|none||none|
|»»» variantDisplay|object|false|none||none|
|»»»» Colors|string|true|none||none|
|»»» quantity|integer|false|none||none|
|»»» maxQuantity|integer|false|none||none|
|»»» price|integer|false|none||none|
|»»» totalPrice|integer|false|none||none|
|»» totalPrice|integer|true|none||none|
|»» currency|string|true|none||none|
|»» totalQuantity|integer|true|none||none|
|»» productsCount|integer|true|none||none|

## POST Add to Cart

POST /cart

> Body Parameters

```json
{
  "productId": "78246111",
  "bundleId": "6dedd3d0-5cc8-47a1-bf50-3ba96f5fcf3f",
  "quantity": 3,
  "variants": [
    "c5160c2a97ce9f5be405ec469ea498d10bbe2b266f6845e34c59778170abc294",
    "ed8f379484d946e27cd604c5351b9fb11c5631c25dbe77e7a92814882f3a476a",
    "c5160c2a97ce9f5be405ec469ea498d10bbe2b266f6845e34c59778170abc294"
  ],
  "type": "BUNDLE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|sessionid|header|string| no |none|
|body|body|object| no |none|
|» productId|body|string| yes |none|
|» bundleId|body|string| yes |none|
|» quantity|body|integer| yes |none|
|» variants|body|[string]| yes |none|
|» type|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Item added to cart successfully",
  "data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|

## PUT Update Item Quantity

PUT /cart

Call this to update an item in the cart with a new quantity

> Body Parameters

```json
"// Product Request\n/*{\n    \"quantity\": 1200, // new quantity\n    \"productId\": \"2326\",\n    \"variantId\": \"23382994b5700d4c8761339c9f8f212fd4d8b27d1b309cd51f462021cffe01df\",\n    \"type\": \"PRODUCT\"\n}*/\n\n// BUNDLE REQUEST\n{\n    \"productId\": \"73351282\",\n    \"bundleId\": \"497929ee-48f3-4b7f-ba52-5ca94790d842\",\n    \"quantity\": 5, // new quantity\n    \"variants\": [ // If the product has variants, this length must be the same as the bundle quantity\n        \"7f0907b99ea07a5ab35fc640b56b8f756e561bf122fdd95c12a80bbaea7e7410\",\n        \"bd8ee6eeaa6670fccf2e1f7b8857ba01d129c4d280aee2efcfd156fcf0b08623\",\n        \"7f0907b99ea07a5ab35fc640b56b8f756e561bf122fdd95c12a80bbaea7e7410\"\n    ],\n    \"type\": \"BUNDLE\"\n}"
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» productId|body|string| yes |none|
|» bundleId|body|string| yes |none|
|» quantity|body|integer| yes |none|
|» variants|body|[string]| yes |none|
|» type|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Cart item updated successfully",
  "data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|

## DELETE Clear Cart

DELETE /cart

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Cart cleared successfully",
  "data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|

## DELETE Remove Item

DELETE /cart/item

> Body Parameters

```json
"// Product Request\n/*{\n    \"productId\": \"1234\",\n    \"variantId\": \"\",\n    \"type\": \"PRODUCTs\"\n}*/\n\n// BUNDLE REQUEST\n{\n    \"productId\": \"73351282\",\n    \"bundleId\": \"497929ee-48f3-4b7f-ba52-5ca94790d842\",\n    \"variants\": [ // If the product has variants, this length must be the same as the bundle quantity\n        \"7f0907b99ea07a5ab35fc640b56b8f756e561bf122fdd95c12a80bbaea7e7410\",\n        \"bd8ee6eeaa6670fccf2e1f7b8857ba01d129c4d280aee2efcfd156fcf0b08623\",\n        \"7f0907b99ea07a5ab35fc640b56b8f756e561bf122fdd95c12a80bbaea7e7410\"\n    ],\n    \"type\": \"BUNDLE\"\n}"
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» productId|body|string| yes |none|
|» bundleId|body|string| yes |none|
|» variants|body|[string]| yes |none|
|» type|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Item removed from cart successfully",
  "data": null
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|

## GET Get Cart Items Count

GET /cart/count

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Cart items count fetched successfully",
  "data": 0
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|integer|true|none||none|

# Ecommerce/Checkout Page

## GET Get Payment Methods

GET /orders/payment-methods

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Payment methods retrieved successfully",
  "data": {
    "CASH": {
      "name": "Pay by Cash",
      "type": "CASH",
      "icon": null,
      "description": "Pay by Cash on delivery",
      "isActive": true,
      "requiredReceipt": false,
      "gatewayTaxType": "none",
      "gatewayTaxRate": 0
    },
    "GATEWAY": {
      "name": "Pay by Card",
      "type": "GATEWAY",
      "icon": null,
      "description": "Pay by Card on delivery",
      "requiredReceipt": false,
      "gatewayTaxType": "none",
      "gatewayTaxRate": 0
    },
    "DEPOSIT": {
      "name": "Pay a Deposit",
      "type": "DEPOSIT",
      "icon": null,
      "description": "Pay a Deposit now and pay the rest on delivery",
      "isActive": false,
      "requiredReceipt": false,
      "gatewayTaxType": "none",
      "gatewayTaxRate": 0,
      "options": {
        "type": "percent",
        "value": 0
      }
    },
    "MANUAL": [
      {
        "id": "3bc71af9-09d1-4d0c-903a-fc400810c123",
        "name": "InstaPay",
        "icon": "https://play.google.com/store/apps/details?id=com.egyptianbanks.instapay&hl=ar",
        "description": "Pay by instapay",
        "requiredReceipt": true,
        "gatewayTaxType": "percentage",
        "gatewayTaxRate": 10,
        "type": "MANUAL"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» CASH|object|true|none||none|
|»»» name|string|true|none||none|
|»»» type|string|true|none||none|
|»»» icon|null|true|none||none|
|»»» description|string|true|none||none|
|»»» isActive|boolean|true|none||none|
|»»» requiredReceipt|boolean|true|none||none|
|»»» gatewayTaxType|string|true|none||none|
|»»» gatewayTaxRate|integer|true|none||none|
|»» GATEWAY|object|true|none||none|
|»»» name|string|true|none||none|
|»»» type|string|true|none||none|
|»»» icon|null|true|none||none|
|»»» description|string|true|none||none|
|»»» requiredReceipt|boolean|true|none||none|
|»»» gatewayTaxType|string|true|none||none|
|»»» gatewayTaxRate|integer|true|none||none|
|»» DEPOSIT|object|true|none||none|
|»»» name|string|true|none||none|
|»»» type|string|true|none||none|
|»»» icon|null|true|none||none|
|»»» description|string|true|none||none|
|»»» isActive|boolean|true|none||none|
|»»» requiredReceipt|boolean|true|none||none|
|»»» gatewayTaxType|string|true|none||none|
|»»» gatewayTaxRate|integer|true|none||none|
|»»» options|object|true|none||none|
|»»»» type|string|true|none||none|
|»»»» value|integer|true|none||none|
|»» MANUAL|[object]|true|none||none|
|»»» id|string|false|none||none|
|»»» name|string|false|none||none|
|»»» icon|string|false|none||none|
|»»» description|string|false|none||none|
|»»» requiredReceipt|boolean|false|none||none|
|»»» gatewayTaxType|string|false|none||none|
|»»» gatewayTaxRate|integer|false|none||none|
|»»» type|string|false|none||none|

## GET Get Zones

GET /store/zones

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|language|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Zones fetched successfully",
  "data": [
    {
      "id": "359787",
      "name": "أسوان",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "359781",
      "name": "أسيوط",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "361059",
      "name": "اسكندرية",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "361849",
      "name": "الدقهلية",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "361294",
      "name": "الغربية",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "360631",
      "name": "القاهرة",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 4
    },
    {
      "id": "360689",
      "name": "المنوفية",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "360483",
      "name": "الوادي الجديد",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "355182",
      "name": "جنوب سيناء",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "358044",
      "name": "دمياط",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "354500",
      "name": "كفر الشيخ",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "7603259",
      "name": "محافظة الأقصر",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "361056",
      "name": "محافظة الإسماعيلية",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "361468",
      "name": "محافظة البحر الأحمر",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 0
    },
    {
      "id": "361370",
      "name": "محافظة البحيرة",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "360997",
      "name": "محافظة الجيزة",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 4
    },
    {
      "id": "359797",
      "name": "محافظة السويس",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "360016",
      "name": "محافظة الشرقية",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "361323",
      "name": "محافظة الفيوم",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "360621",
      "name": "محافظة القليوبية",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "360688",
      "name": "محافظة المنيا",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "359171",
      "name": "محافظة بني سويف",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "358617",
      "name": "محافظة بور سعيد",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "347794",
      "name": "محافظة سوهاج",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "349401",
      "name": "محافظة شمال سيناء",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "350546",
      "name": "محافظة قنا",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    },
    {
      "id": "352603",
      "name": "محافظة مطروح",
      "fees": 100,
      "enabled": true,
      "estimatedDeliveryTimeInDays": 8
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» id|string|true|none||none|
|»» name|string|true|none||none|
|»» fees|integer|true|none||none|
|»» enabled|boolean|true|none||none|
|»» estimatedDeliveryTimeInDays|integer|true|none||none|

## POST Init ChceckOut

POST /orders/init-checkout

> Body Parameters

```json
"{\n    \"cityId\": \"\",\n    \"discountCode\": \"\",\n    \"pickupMethod\": \"SHIPPING\",\n    \"products\": [\n        {\n            \"productId\": \"19920079\",\n            \"quantity\": 1,\n            \"variantId\": \"c8f6e9e497dc18dd6457676c9a1e4f391b6ed7614930150f159c069a1c8c64e9\",\n            \"type\": \"PRODUCT\"\n        }\n    ],\n    // FIELDS FOR GATEWAY FEES CALCULATION\n    \"gatewayType\": \"MANUAL\", // MANUAL, CASH, CARD, DEPOSIT\n    \"gatewayId\": \"6764e461-170f-4124-a7c1-9fc46140402b\" // Only for manual\n}"
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» cityId|body|string| yes |none|
|» discountCode|body|string| yes |none|
|» pickupMethod|body|string| yes |none|
|» products|body|[object]| yes |none|
|»» productId|body|string| no |none|
|»» quantity|body|integer| no |none|
|»» variantId|body|string| no |none|
|»» type|body|string| no |none|
|» gatewayType|body|string| yes |none|
|» gatewayId|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Validate Discount Code

POST /orders/discount/validate

> Body Parameters

```json
{
  "code": "SUMMER250",
  "products": [
    {
      "id": "84057478",
      "variantId": "193cdcf2962249ed92d8c64af521e0a776377806c7261d40667a20bc241a6c4b",
      "quantity": 8
    }
  ],
  "cityId": "361059"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» code|body|string| yes |none|
|» products|body|[object]| yes |none|
|»» id|body|string| no |none|
|»» variantId|body|string| no |none|
|»» quantity|body|integer| no |none|
|» cityId|body|string| yes |none|

> Response Examples

> 200 Response

```json
"{\n    \"status\": 200,\n    \"message\": \"Success\",\n    \"data\": {\n        \"valid\": true,\n        \"value\": 40,\n        \"message\": \"Discount code eligible\",\n        \"isNew\": true,\n        \"discount\": {\n            \"type\": \"free_shipping\",\n            \"value\": 40\n        }\n    }"
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Calculate Order Price

POST /orders/price

> Body Parameters

```json
{
  "cityId": "",
  "discountCode": "FREE",
  "products": [
    {
      "id": "14277583",
      "name": "bundle and variantsj",
      "image": "https://vondera-bucket.s3.eu-north-1.amazonaws.com/stores/W9DhSs7ZbZc9czcsYMr0WtqOCdy2/products/14277583/e4886318-7a24-4af4-98fe-363783490c61.jpeg",
      "categoryName": "test arabic web",
      "subCategoryName": "",
      "currency": "EGP",
      "link": "https://localhost/product/14277583",
      "isDigital": false,
      "variantId": "b5f8cc9b035b14124b9c24b6c0c9fc26afd68f71ccd6579e5364b31088ae5927",
      "variantsIds": [
        "b5f8cc9b035b14124b9c24b6c0c9fc26afd68f71ccd6579e5364b31088ae5927"
      ],
      "variantDisplay": {
        "color": "red",
        "size": "s"
      },
      "bundleVariants": [],
      "bundleId": "",
      "quantity": 1,
      "maxQuantity": 3,
      "price": 500,
      "totalPrice": 500,
      "type": "PRODUCT"
    }
  ],
  "pickupMethod": "SHIPPING",
  "gatewayType": "DEPOSIT"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» cityId|body|string| yes |none|
|» discountCode|body|string| yes |none|
|» products|body|[object]| yes |none|
|»» id|body|string| no |none|
|»» name|body|string| no |none|
|»» image|body|string| no |none|
|»» categoryName|body|string| no |none|
|»» subCategoryName|body|string| no |none|
|»» currency|body|string| no |none|
|»» link|body|string| no |none|
|»» isDigital|body|boolean| no |none|
|»» variantId|body|string| no |none|
|»» variantsIds|body|[string]| no |none|
|»» variantDisplay|body|object| no |none|
|»»» color|body|string| yes |none|
|»»» size|body|string| yes |none|
|»» bundleVariants|body|[any]| no |none|
|»» bundleId|body|string| no |none|
|»» quantity|body|integer| no |none|
|»» maxQuantity|body|integer| no |none|
|»» price|body|integer| no |none|
|»» totalPrice|body|integer| no |none|
|»» type|body|string| no |none|
|» pickupMethod|body|string| yes |none|
|» gatewayType|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "itemsPrice": 500,
    "shippingFees": 0,
    "discount": 0,
    "gatewayFees": 500,
    "totalTaxes": 0,
    "totalPrice": 50,
    "amountToPayLater": 450,
    "autoApplyPromo": null
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» status|integer|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» itemsPrice|integer|true|none||none|
|»» shippingFees|integer|true|none||none|
|»» discount|integer|true|none||none|
|»» gatewayFees|integer|true|none||none|
|»» totalTaxes|integer|true|none||none|
|»» totalPrice|integer|true|none||none|
|»» amountToPayLater|integer|true|none||none|
|»» autoApplyPromo|null|true|none||none|

# Data Schema

