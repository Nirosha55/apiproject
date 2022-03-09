// // import React, {hooks, useState} from 'react';
// // import {useEffect} from 'react';
// // import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';

// // const App = () => {
// //   const [dataList, setdataList] = useState([]);

// //   useEffect(() => {
// //     getDataListFromServer();
// //   }, []);

// //   const getDataListFromServer = async () => {
// //     await fetch(
// //       'http://ec2-3-7-117-218.ap-south-1.compute.amazonaws.com:8081/sales/lead/all?limit=10&offset=0&status=PREENQUIRY&empId=73',
// //     )
// //       .then(response => response.json())
// //       // .then(json => {
// //       //   console.log('json', json);
// //       //   const contentArray = json.content;
// //       //   setdataList(contentArray);
// //       // })
// //       .then(data => {
// //         //  console.log('data', data);
// //         const dmsEntityObject = data.dmsEntity;
// //         const leadDtoObject = dmsEntityObject.leadDtoPage;
// //         const contentArray = leadDtoObject.content;
// //         setdataList(contentArray);
// //       })
// //       .catch(error => {
// //         console.error('error:', error);
// //       });
// //   };
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <Text>Get Method</Text>
// //       <FlatList
// //         data={dataList}
// //         keyExtractor={(item, index) => item.id}
// //         renderItem={({item, index}) => {
// //           console.log(item);

// //           return (
// //             <View
// //               style={{
// //                 width: '100%',
// //                 height: 320,
// //                 marginTop: 5,
// //                 marginLeft: 5,

// //                 marginBottom: 5,
// //                 backgroundColor: 'lightgray',
// //                 paddingLeft: 20,
// //               }}>
// //               <Text>{item.universalId}</Text>
// //               <Text>{item.leadId}</Text>
// //               <Text>{item.firstName}</Text>
// //               <Text>{item.lastName}</Text>
// //               <Text>{item.createdDate}</Text>
// //               <Text>{item.dateOfBirth}</Text>
// //               <Text>{item.enquirySource}</Text>
// //               <Text>{item.enquiryDate}</Text>
// //               <Text>{item.model}</Text>
// //               <Text>{item.enquirySegment}</Text>
// //               <Text>{item.phone}</Text>
// //               <Text>{item.leadStage}</Text>
// //               <Text>{item.customerType}</Text>
// //               <Text>{item.alternativeNumber}</Text>
// //               <Text>{item.enquiryCategory}</Text>
// //               <Text>{item.createdBy}</Text>
// //               <Text>{item.salesConsultant}</Text>
// //               <Text>{item.email}</Text>
// //               <Text>{item.leadStatus}</Text>
// //             </View>
// //           );
// //         }}
// //       />
// //     </SafeAreaView>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({
// //   rootStyle: {
// //     flex: 1,
// //     flexDirection: 'column',
// //   },
// // });

// import React, {hooks, useState} from 'react';
// import {useEffect} from 'react';
// import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';

// const App = () => {
//   const [movieList, setmovieList] = useState([]);
//   useEffect(() => {
//     getMoviesListFromServer();
//   }, []);
//   //------------POST method-----------
//   const obj = [
//     {
//                                 apiUrl: "https://google.com",
//                                 description: "Create Lead ",
//                                 displayName: "Creat lead",
//                                 actionName: "createContact",
//                                 organizationId: 1,
//                                 branchId: 1,
//                                 renderType: "button",
//                                 menuId: 86,
//                                 editApiUrl: "role-management/dms/actions",
//                                 menuType: "submenu",
//     },
// {
//   id:"2",
//   menuType: 'submenu',
//   mappedToRole: 'manu',
// },
// {
//   id:"3",
//   branchName: 'Hyderabad -test',
//   branchEmail: 'automate.customerapp@gmail.com',
//   orgEmail: 'CRM@gmail.com',
//   hrmsRole: 'Field DSE',
// },
// ];
// const getMoviesListFromServer = () => {
//   //   const getMoviesListFromServer = async () => {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(obj),
//   })
//     .then(response => response.json())
//     .then(json => {
//       console.log('json', json);
//     });
//   // .catch(error => {
//   //   console.error('error:', error);
//   // });

// //  ------------get method-------------

// //     await fetch('https://reactnative.dev/movies.json')
// //       .then(response => response.json())
// //       .then(json => {
// //         console.log('json', json);
// //         const movieList = json.movies;
// //         setmovieList(movieList);
// //       })
// //       .catch(error => {
// //         console.error('error:', error);
// //       });
// //   };
// //   };

//   return (
//     <SafeAreaView>
//       <View style={{width: '100%'}}>
//         <Text>Get Method</Text>

//         <FlatList
//           data={obj}
//           keyExtractor={(item, index) => item.id}
//           renderItem={({item, index}) => {
//             return (
//               <View
//                 style={{
//                   width: 300,
//                   height: 300,
//                   marginTop: 1,
//                   marginLeft: 10,

//                   marginBottom: 1,
//                   backgroundColor: 'cyan',
//                   paddingLeft: 50,
//                 }}>
//                 <Text>{item.apiUrl}</Text>
//                 <Text>{item.description}</Text>
//                 <Text>{item.displayName}</Text>
//                 <Text>{item.actionName}</Text>
//                 <Text>{item.branchId}</Text>
//                 <Text>{item.organizationId}</Text>
//                 <Text>{item.renderType}</Text>
//                 <Text>{item.menuId}</Text>
//                 <Text>{item.editApiUrl}</Text>
//                 <Text>{item.menuType}</Text>
//                 {/* <Text>{item.hrmsRole}</Text> */}
//               </View>
//             );
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;



// // import React, {useEffect} from 'react';
// // import {StyleSheet, View, Button} from 'react-native';

// // const App = () => {
// //   const eventclicked = () => {
// //     getDataListFromServer();
// //   };

// //   const getDataListFromServer = async () => {
// //     await fetch(
// //       'http://ec2-3-108-253-173.ap-south-1.compute.amazonaws.com:8085/ops/dms/getAllServiceEventsByFilterByStatus?startdate=2021-01-09&enddate=2021-10-19&status=Approval_pending&managerId=1&pageNo=0&pageSize=10',
// //     )
// //       .then(response => response.json())
// //       .then(data => {
// //         console.log('data', data);
// //       })
// //       .catch(error => {
// //         console.error('error:', error);
// //       });
// //   };
// //   useEffect(() => {
// //     getDataListFromServer();
// //   }, []);

// //   return (
// //     <View>
// //       <Button title="HIT URL" onPress={eventclicked} />
// //     </View>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({});










import React, {hooks, useState} from 'react';
import {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  const [movieList, setmovieList] = useState([]);
  useEffect(() => {
    getMoviesListFromServer();
  }, []);
  //------------POST method-----------
  const obj = [
    {
      username: 'Mounika',
      login: 'Manu',
      roll: 1,
    },
    {
      username: 'Mounika',
      login: 'Manu',
      roll: 1,
    },
    {
      userId: 1,
      title: 'sunt aut facere repellat provident ',
      body: ' ut ut quas totam\nnostrum rerum ',
    },
  ];
  const getMoviesListFromServer = () => {
    //   const getMoviesListFromServer = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
      });
    //   .catch(error => {
    //     console.error('error:', error);
    //   });

    //  ------------get method-------------

    //     await fetch('https://reactnative.dev/movies.json')
    //       .then(response => response.json())
    //       .then(json => {
    //         console.log('json', json);
    //         const movieList = json.movies;
    //         setmovieList(movieList);
    //       })
    //       .catch(error => {
    //         console.error('error:', error);
    //       });
    //   };
  };

  return (
    <SafeAreaView>
      <View style={{width: '100%'}}>
        <Text>Post Image</Text>

        <FlatList
          data={obj}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: 300,
                  height: 120,
                  marginTop: 25,
                  marginLeft: 15,

                  marginBottom: 22,
                  backgroundColor: 'pink',
                  paddingLeft: 30,
                }}>
                <Text>{item.username}</Text>
                <Text>{item.login}</Text>
                <Text>{item.roll}</Text>
                <Text>{item.userId}</Text>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;