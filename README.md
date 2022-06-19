**Project setup**
```
npm install
```

**Compiles and hot-reloads for development**
```
npm run serve
```

**Compiles and minifies for production**
```
npm run build
```

**Lints and fixes files**
```
npm run lint
```

##1. 我們該如何執行你完成的專案
### 首頁
![markdown](https://github.com/a35506322/unnotech-frontend-recruit/blob/master/src/assets/%E8%AA%AA%E6%98%8E/%E9%A6%96%E9%A0%81.png?raw=true)
#### 功能敘述
+ 編號 1 為新增紐，可以開啟新增視窗
說明：
1.有檢驗書本名稱、作者、備註為必輸，未達標準案下儲存會阻擋

![](https://github.com/a35506322/unnotech-frontend-recruit/blob/master/src/assets/%E8%AA%AA%E6%98%8E/%E6%96%B0%E5%A2%9E.PNG?raw=true)
+ 編號 2 可以輸入關鍵字進行模糊搜尋
說明：
1.即時搜尋，只要打字就會搜尋
+ 編號 3 可以進行單筆刪除,刪除前會進行確認
![](https://github.com/a35506322/unnotech-frontend-recruit/blob/master/src/assets/%E8%AA%AA%E6%98%8E/%E5%88%AA%E9%99%A4.PNG?raw=true)
+ 編號 4 可以滑入卡片進行點選進入詳細資料並點選編輯按鈕
1.詳細資料
![](https://github.com/a35506322/unnotech-frontend-recruit/blob/master/src/assets/%E8%AA%AA%E6%98%8E/%E8%A9%B3%E7%B4%B0%E8%B3%87%E6%96%99.PNG?raw=true)
2.修改書本視窗
![](https://github.com/a35506322/unnotech-frontend-recruit/blob/master/src/assets/%E8%AA%AA%E6%98%8E/%E4%BF%AE%E6%94%B9.PNG?raw=true)
+ 編號 5 可以進行分頁
##2. 專案的架構、邏輯說明
利用VueCli建立專案
+ main.js	(程市進入點)
+ views	(Page)
+ router	(路由表)
+ plugins	(擴充套件)
+ mixins	(共用vue結構)
+ methods	(共用方法)
+ commponents	(元件)
+ assests	(靜態資源)
+ apis	(呼叫API網址)
##3. 你對於所有使用到的第三方 library 的理解，以及為何使用它
+ axios
1.主要利用在呼叫API與後端串接使用
2.可以做request以及response做攔截統一處理,例如某些status code 可以做統一錯誤處理
3.可以統一預設例如domain以及header
4.github說明文件寫得非常詳細
+ Vuex
1.集中化狀態管理,例如分頁資訊,或者使用者資訊,可以做即時的雙向管理
+ PrimeVue
1.開發的模組功能強大,加上官網說明文件充足
2.包含各種Frame樣式,也有自己的CSS通用類別
3.目前多做的專案都是後台,這樣就蠻足夠的了,一方面是維護上也方便
+ bootstrap icon
1.因為PrimeVue icon太少,所以就裝了這個來用
##4. 在這份專案中你遇到的困難、問題，以及解決的方法
Q: 在進行分頁的時候,如果點選詳細資料或加上模糊搜尋時候,返回至BookList會沒法返回點選的那頁?
A: 由於點選詳細資料有轉頁,所以生命週期會再重走,因此本來頁面資訊狀態會消失,本來在思考要用內存還是Vuex解決,但因為沒使用過Vuex,所以想挑戰看看,所以就查了官網試做看看
Q: 由於需求上並不難,但是要把它做得很酷或者很完整讓我思考了一下?
A: 最後覺得把自己認為重要的功能給補上去,並且多方測試,不要讓它出現BUG