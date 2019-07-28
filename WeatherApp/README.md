team 777 weather app
```
1. components 에 background에 쓰일 이미지를 추가했다.
   
   온도에 따라 background에 쓰일 이미지를 나눈다
   >>>
   backgrounddofirst.png
   cloudysky.png
   hotsky.png
   perfectsky.png
   rainysky.png

   >>>
   ./componenets/...png
```
2. App.js 의 navigator 는 createStackNavigator 를 이중으로 사용했다.

```
3. 첫화면은 AppLoading.js 파일
   
    ProgressBarAndroid 를 사용해서 loding 화면을 보여준다
    이후에 버튼을 누르면 다음 도시 리스트를 보여주는 화면으로 넘어간다

    >>>
    this.props.navigation.navigate('Detail')

```
4. 두번째 화면은 CityList.js 파일
    
    fetch 해서 가져온 도시 리스트를 누를수 있는 버튼 형식으로 가져온다.

```
5. 마지막 detail 화면은 WeatherDetailScreen.js 파일

    앞서 설명한 background.png 를 배경으로 온도를 표기해준다.

