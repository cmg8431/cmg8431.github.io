---
date: '2022-01-15'
categories: ['Web', 'Typescript']
title: 'Type, Inteface 차이'
summary: '오늘은 제가 좋아하는 언어인 타입스크립트의 type과 inteface의 차이점을 알아봅시다.'
thumbnail: './Img/MainImg.png'
---

# 갑자기 type과 interface의 차이?

최근 타입스크립트에 관심을 두고 있었는데, 주변 친구가 type과 inteface의 차이점을 물었을때
대답하지 못했습니다. 여기서 타입스크립트의 문법을 자세하게 알아보고자하는 결심을 하게되었고, 블로그에 끄적이면서 정리해보고자 합니다.

```typescript
interface HumanInterface {
  gender: string;
  height: number;
  age: number;
}

const Mingi: HumanInterface = {
  gender: 'Man',
  height: 174,
  age: 19,
};

type HumanType = {
  gender: string;
  height: number;
  age: number;
};

const Ryan: HumanType = {
  gender: 'Man',
  height: 180,
  age: 24,
};
```

위에서 볼 수 있는 것 처럼 interface와 type은 객체의 타입의 이름을 지정하는 방법입니다.
이런 interface와 type의 차이는 확장 즉 상속하는 부분에서 부터 문법적으로 차이가 있다고 합니다.

```typescript
interface HumanInterface {
  gender: string;
  height: number;
  age: number;
}

interface KoreaHuman extends HumanInterface {
  country: string;
}
```

다음과 같이 interface는 extends라는 상속 문법을 사용해 상속을 합니다.
반면 type의 경우를 살펴보겠습니다.

```typescript
type HumanType = {
  gender: string;
  height: number;
  age: number;
};

type KoreaHuman = HumanType & {
  country: string;
};
```

type의 경우 & 라는 특수문자를 사용해 확장한다고 합니다.
그럼 이제 문법이아닌 자세하게 어떨때 사용하고, 사용하지 않아야하는지 알아봅시다.<br/><br/>

아까 말했다시피 확장에서 차이가 나지만 선언적 차이라는 부분에서 큰 차이를 나타납니다.
inteface는 항상 선언적 확장이 가능하지만 type은 새로운 속성을 추가하기 위해 다시 같은 이름을 선언할 수 없다 하네요.
<br/><br/>
한번 예제를 보면서 이해해보도록 합시다.

```typescript
interface Human {
  gender: string;
}

interface Human {
  height: number;
}

const Mingi: Human = {
  gender: 'Man',
  height: 174,
};

console.log(Mingi);
```

위와 같이 코드를 입력하고 컴파일할시엔 정상적으로 값이 나오는 것을 확인할 수 있습니다.
위에서 언급했다시피 선언적으로 계속 확장이 가능한 것이죠.

```typescript
type Human = {
  gender: string;
};

type Human = {
  height: number;
};

// error : 식별자 중복
```

다음과 같이 코드를 입력할 시에 type은 식별자 중복으로 인한 에러가 나타나는 것을 확인할 수 있습니다.

## 결론

두 가지 방법 비슷하나 공식문서는 Interface의 사용을 추천하고 있습니다. 그 까닭으론 interface는 충돌을 해결하기 위해
단순한 객체 타입을 만든다고 합니다. 왜냐하면 interface의 목적은 객체의 타입을 만들기 위한 것 이기 떄문에 결론적으로 객체만 오기 때문입니다.
하지만 type은 재귀적으로 순회하며 속성을 merge 한다고 하네요. 이 방법의 문제점은 일부 never가 나와 머지가 이상하게 적용될 가능성이 있습니다.

<br/><br/>

따라서 평소에는 interface 사용을 중시하고 유니온 타입, 튜플, 원시 값의 타입을 선언해야 할 경우 type alias를 사용하면 될거같습니다.
