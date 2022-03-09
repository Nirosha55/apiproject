// import React, {hooks, useState} from 'react';
// import {useEffect} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TextInput,
//   Button,
// } from 'react-native';

// const Api = () => {
//   const [movieList, setmovieList] = useState([]);
//   useEffect(() => {
//     getMoviesListFromServer();
//   }, []);
//   //------------POST method-----------
//   const obj = [
//     {
//       mysa: 'foo',
//       yamuna: 'bar',
//       devi: 1,
//     },
//     {
//       userId: 1,

//       title: 'sunt aut facere repellat provident ',
//       body: ' ut ut quas totam\nnostrum rerum ',
//     },
//   ];
//   const getMoviesListFromServer = () => {
//     //   const getMoviesListFromServer = async () => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(obj),
//     })
//       .then(response => response.json())
//       .then(json => {
//         console.log('json', json);
//       });
//     //   .catch(error => {
//     //     console.error('error:', error);
//     //   });

//     //  ------------get method-------------

//     //     await fetch('https://reactnative.dev/movies.json')
//     //       .then(response => response.json())
//     //       .then(json => {
//     //         console.log('json', json);
//     //         const movieList = json.movies;
//     //         setmovieList(movieList);
//     //       })
//     //       .catch(error => {
//     //         console.error('error:', error);
//     //       });
//     //   };
//   };

//   return (
//     <SafeAreaView>
//       <View style={{width: '100%'}}>
//         <Text>Post Image</Text>

//         <FlatList
//           data={obj}
//           keyExtractor={(item, index) => item.id}
//           renderItem={({item, index}) => {
//             return (
//               <View
//                 style={{
//                   width: 300,
//                   height: 150,
//                   marginTop: 15,
//                   marginLeft: 15,

//                   marginBottom: 5,
//                   backgroundColor: 'pink',
//                   paddingLeft: 50,
//                 }}>
//                 <Text>{item.mysa}</Text>
//                 <Text>{item.yamuna}</Text>
//                 <Text>{item.devi}</Text>
//                 <Text>{item.userId}</Text>
//                 <Text>{item.title}</Text>
//                 <Text>{item.body}</Text>
//               </View>
//             );
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };
// export default Api;










import React, {useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';

const App = () => {
  const eventclicked = () => {
    getDataListFromServer();
  };

  const getDataListFromServer = async () => {
    await fetch(
      'http://ec2-3-108-253-173.ap-south-1.compute.amazonaws.com:8085/ops/dms/getAllServiceEventsByFilterByStatus?startdate=2021-01-09&enddate=2021-10-19&status=Approval_pending&managerId=1&pageNo=0&pageSize=10',
    )
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
      })
      .catch(error => {
        console.error('error:', error);
      });
  };
  useEffect(() => {
    getDataListFromServer();
  }, []);

  return (
    <View>
      <Button title="HIT URL" onPress={eventclicked} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
