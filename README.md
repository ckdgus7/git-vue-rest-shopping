# [SPA GUIDE]

## libs
```bash
axios / composition-api / dragula / vue-chartjs / vue-lodash / vue-carousel / vue-infinite-scrolling
```
## 프로젝트 구조
```bash
├─api                                             # API
├─assets
│  └─css
├─components                                      # components
│  ├─board
│  ├─chart
│  ├─home
│  ├─memo
│  ├─news
│  └─shop
├─cpa_function                                     # composition-api functions
├─mixin                                            # mixin 설정
├─router                                           # router 설정
├─store
├─util                                             # deepFreeze / sanitize 구성
└─views                                            # views - gnb 메뉴명 기준 구성
```

### .env, .env.development, .env.production
- 개발 환경별로 공통 변수 설정

### lib
```bash
└─util
  ├─deepFreeze.js         # deepFreeze, 변경 불가 상수 처리
  ├─cookies.js            # 사이트 쿠키 I/O
  └─index.js              # formatPrice, replaceAll, addCommas, validateEmail
```

### mixins
- 각 카테고리 별 공통 Vue API 함수 제공
  (composition-api로 마이그레이션 단계로 미사용 예정)


### store
- 사이트 Data 관리
  - state, getters, mutations, actions 별도 관리

### API 호출
- api
  ```javascript
  ```
- api 호출 방식
  - api 공통 처리는 ~/api 에서 처리


## 코딩 스타일
- composition-api (코딩 구분을 위해 HOME, BBS 페이지 컴포넌트만 적용)
- async await 을 기본으로 활용
- mapGetters / mapStates / mapActions / mapMutations
  - 대문자로 선언
- computed
  - 화면상에 데이터를 주입할 때, 되도록 computed 에서 메소드를 구성하고 활용되도록 구성
  - 컴포넌트 재활용성을 높이기 위함



## [Project Info]

- API Server Info : LAPM (Linux, Apache, php5, mysql 5)
- FE 기술조사 : vue / vuex / vue-router / axios / composition-api / dragula / vue-chartjs / vue-lodash / vue-carousel / vue-infinite-scrolling
- Playground (Service) - http://jswrap.ivyro.net

  - 게시판 (composition-api 적용)
    - 게시글 리스트 (검색기능 추가)
    - 게시글 상세보기
    - 게시글 등록
    - 게시글 수정
    - 게시글 삭제

  - Memo 리스트
    - Memo Drag&Drop

  - 쇼핑 상품 리스트 (검색기능 추가 / 마우스 스크롤 시 More Item)
    - 쇼핑 상품 상세보기
    - 리스트에서 장바구니 추가 / 리스트
    - 상세보기에서 장바구니 추가 / 리스트

  - 인기 상품 Chart
    - Search Tab


## [Vue vs Composition API Lifecycle Hook]
```bash
vue vs Composition API
```
- beforeCreate -> use setup()
- created -> use setup()
- beforeMount -> onBeforeMount
- mounted -> onMounted
- beforeUpdate -> onBeforeUpdate
- updated -> onUpdated
- beforeDestroy -> onBeforeUnmount
- destroyed -> onUnmounted
- errorCaptured -> onErrorCaptured
