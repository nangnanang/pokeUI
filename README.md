3개의 페이지를 만들고 그 중 dex 페이지에서만 components를 가져다 씀
dex
-DashBoard -> AddForm -> AddCard
-PokemonList -> PokemonCard

3개의 브랜치 완성
-props-drilling
-context
-redux-toolkit 
가장 마지막으로 redux-toolkit을 완성하고 main에 머지함

-props-drilling
상위 컴포넌트 dex에서
mock.js 파일에 있는 MOCK_DATA를 가져오고 useState를 선언하여 props로 전달하였다.
상세페이지에서는 mock.js 파일에서 다시금 데이터를 가져와서 쿼리스트링으로 데이터를 추출하여 사용하였다. 

-context
context 폴더에 Pokemon.jsx 파일을 생성하여 필요한 데이터를 provider하는 컴포넌트를 만들어서 dex에서 감싸주었다. 
이후 dex 하위 컴포넌트에서 useContext를 사용하여 필요한 데이터를 가져와서 활용하였다. 
상세페이지는 이전과 같다. 

-redux-toolkit (완성본)
redux 폴더에 config, slices 폴더를 만들어서 store, slice 파일을 생성하여 활용하였다. 
이렇게 파일을 생성하고 필요할 때에만 useDispatch로 slice 함수를 가져와 사용할 수 있다. 

-context와 달리 provider로 감싸줄 필요가 없어서 상세페이지에서도 slice에서 만든 reducer를 가져와서 사용할 수 있었다. 
-또한 useState를 사용하지 않는다. 

-이렇게 context와 redux-toolkit의 차이점을 살피니 context는 전역상태관리가 아니고, redux만이 전역상태관리라는 것을 확실히 알 수 있었다. 
