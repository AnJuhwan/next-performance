## version 12 / version 13 큰 차이점

### 12 version: 페이지 단위로 렌더링 방식을 규정

### 13 version: react18 버전부터 Server Components을 규정 - 컴포넌트 단위로 렌더링 방식을 규정 할 수 있음 (app 폴더에 모든 컴포넌트는 기본적으로 서버 컴포넌트)

<br />

## Server-Components인지 Client-Components 확인 할 수 있는 방법 (보류)

## Server Components

- console.log을 찍어보게 되면 브라우저(개발자도구)에서 console.log가 찍히지 않는다.
- vscode 내에 있는 terminal에서 찍힌다.
  </br>
  이유: 서버에서 렌더링이 되어서 나오기 때문이다. (HTML형태로 받아온다.)
- 브라우저에서 제공하는 API을 사용 할 수 없다. (ex: localStroage, Intersection Observer)등
- 리액트에서 제공하는 useState을 이용한 상태관리를 할 수 없다.
- node 환경에서 제공하는 API을 사용 할 수 있다. (fs, os 사용 가능)

## Client Components

- 브라우저에서 제공하는 API을 사용 할 수 있다.
- 리액트에서 제공하는 useState을 사용해서 상태관리를 할 수 있다.
- next13 에서는 'use client'; 사용하여 클라이언트 컴포넌트로 전환할 수 있다.
- 예제: components - Counter.tsx
- 클라이언트 컴포넌트의 말은 무조건 클라이언트 사이드 렌더링이 된다는 얘기가 아니다.
- 클라이언트 컴포넌트란: 사용자가 클릭하는 이벤트나, 브라우저에서 사용되어야 하는 코드를 클라이언트에서 처리한다는 개념이다.

## 동작원리

<img src="src/assets/images/스크린샷 2023-05-29 오전 1.57.41.png" />

위의 사진은 yarn build 을 하게 나오면 나오는 정보이다. </br>
○ 정적인 페이지들의 대한 정보이다.</br>
● dynamic 라우터 페이지를 가르키는데 dynamic/0531 , dynamic/0313 페이지만은 정적으로 미리 만들어서 놓았다는 정보이다. </br>
