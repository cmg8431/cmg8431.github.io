---
date: '2022-01-05'
title: 'Yarn Berry 도입기'
summary: '최근 많이 사용되고 있는 yarn berry에 대해서 학습하고 사용해볼게요.'
thumbnail: './Img/MainImg.png'
---

# Yarn Berry 란?

yarn berry는 새로운 패키지 관리 시스템입니다. 2020년 1월 25일부터 정식 버전이 출시 되었고, 현재는 토스, Babel등 기업과 오픈소스 레포지토리등에서 많이 채택하고 사용하고 있다고 하네요.

## 사용 계기

처음 yarn berry에 대해서 알게 된 계기는 toss의 프론트 개발 스택에 yarn berry가 도입됬었다는 것을 처음 보게 되고 관심을 두게 되었어요.<br /><br />
여기서 잘 쓰던 npm을 버리고 왜 yarn berry를 쓰게 되었는지 궁금하신 분들이 꽤 계실 것이라고 생각하는데, npm은 node.js 설치 시에 기본적으로 제공이 되어 많은 사람이 사용하고 있으나, 비효율적인 부분이 매우 많습니다.

## 비효율적인 의존성 검색

특히 node_modules라는 폴더를 이용하는 것이 특징인데 이렇게 관리했을 때 의존성 검색은 비효율적으로 동작한다고 합니다.

간단하게 소개해드리자면 npm은 패키지를 찾기 위해 계속 상위 디렉토리의 node_modules를 탐색하는데 이때 패키지를 찾지 못할수록 계속 I/O 호출이 반복되기 때문에 굉장히 비효율적이다고 볼 수 있습니다. 자세한 내용은 토스 개발 블로그를 직접 확인해보시는 것을 추천합니다.

## 공간 차지

사실 제가 yarn berry로 넘어오게 된 가장 큰 이유라고 볼 수 있습니다. 개인적으로 node_modules라는 디렉토리 구조는 정말 큰 공간을 차지합니다. 그 규모는 프로젝트 용량의 절반을 넘을 정도의 용량입니다. 저는 이런 부분에서 npm이라는 파일 관리 시스템이 매우 무겁고 비효율적이라고 생각하게 되었고, 결과적으로 yarn berry를 도입하게 된 계기가 되었습니다.

## yarn berry가 어떻게 기존의 방식에서 벗어났을까?

yarn berry는 이를 PnP 전략을 사용해서 해당 방식을 해결했습니다. 이 PnP 전략을 사용하게 된다면 더 이상 node_modules에 저장되지 않습니다. 대신 yarn/cache 폴더에 의존성의 정보가 저장되고 .pnp.js 파일에 의존성을 찾을 수 있게 됩니다. <br /><br />
또한 각 의존성은 Zip 아카이브로 관리 됩니다.

## pnp 사용법

먼저 yarn을 설치합니다. (설치 되어있다면 생략해도 무방합니다.)

```
npm install -g yarn
```

프로젝트 경로로 이동하여, 아래와 같이 berry 버전으로 설정해줍니다.

```
yarn set version berry
```

기존의 파일을 수정합니다.

```
.npmrc -> .yarnrc.yml
package.lock.json -> 제거
node_modules -> 제거
```

설치를 진행해줍니다.

```
yarn or yarn install
```

.gitignore 파일에 내용을 추가합니다.

zero-install을 사용한다면

```
.yarn/\*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

zero-install을 사용하지 않는다면

```
.pnp._
.yarn/_
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

이렇게 설정하신다면 yarn berry 설정이 끝이 납니다.

## 다음은 next.js에 yarn berry 적용하기 입니다.

먼저 `mkdir [project-name]`로 만들고 `cd [project-name]`로 이동해줍니다.

이후 `yarn init -2`를 통하여 기본적인 파일들을 받아줍니다.

그리고 `yarn add next react react-dom`을 통하여 다운 받아주고

pakage.json에

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

위의 내용을 추가해줍니다.

`mkdir pages && touch pages/index.tsx` 명령어를 통하여 tsx를 만들어줍니다.

```javascript
function HomePage() {
  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
```

그리고 위의 내용을 index 파일에 추가한 후 yarn dev를 통해 실행시키면 정상적으로 실행되는 모습을 볼 수 있습니다.

참고로 기존의 방식으로 돌아가려면 다음 명령어를 통해 클래식 버전으로 바꾸면 됩니다.<br />
`yarn set version classic`
