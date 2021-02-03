import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import axios from "axios"
import { SearchFeedInput, FilterDropDown, ArticleItem, MemberItem, NetworkItem } from '@components';
import styles from './styles';
// import { MemberItem } from '../../../components';

const FeedScreen = () => {
  const [visibleFilterDlg, setVisibleFilterDlg] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [dataState, setDateState] = useState([]);

  const handleFilterDlg = (value) => {
    setVisibleFilterDlg(value);
  };

  useEffect(() => {
    axios.post('https://api.trust-net.co//user/login/', {
      email: 'arik@chimu.io',
      password: '111111'
    })
    .then(function (response) {
      if(response.data.success) {
        var token = response.data.data.user.token;
        axios.get('https://api.trust-net.co/wall_data/?last_date=2021-01-28T08:15:27.760142&mobile=true&limit=20',{
          headers: {
            'Authorization': `token ${token}` 
          }
        }
        ).then(function(response) {
          setDateState(response.data.data);
          // var articleData = response.data.data.articles
          let {articles, members, polls, events, network_opportunities, sponsors} = response.data.data;
          let total_data = [];
          if(articles) {
            for(var i = 0; i < articles.length; i ++) {
              articles[i].type = "articles";
              total_data.push(articles[i]);
            }
          }
          if(members) {
            for(var i = 0; i < members.length; i ++) {
              members[i].type = "members";
              total_data.push(members[i]);
            }
          }
          if(polls) {
            for(var i = 0; i < polls.length; i ++) {
              polls[i].type = "polls";
              total_data.push(polls[i]);
            }
          }
          if(events) {
            for(var i = 0; i < events.length; i ++) {
              events[i].type = "events";
              total_data.push(events[i]);
            }
          }
          if(network_opportunities) {
            for(var i = 0; i < network_opportunities.length; i ++) {
              network_opportunities[i].type = "network_opportunities";
              total_data.push(network_opportunities[i]);
            }
          }
          if(sponsors) {
            for(var i = 0; i < sponsors.length; i ++) {
              sponsors[i].type = "sponsors";
              total_data.push(sponsors[i]);
            }
          }
          // total_data.sort((a, b) => (a.created < b.created) ? 1 : -1);
      
          setDataList(total_data);
        }).catch(function (error) {
          console.log(error);
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <SearchFeedInput showFilter={handleFilterDlg} />
        {visibleFilterDlg && <FilterDropDown />}
        <FlatList data={dataList} renderItem={({ item, index }) => 
            {
              switch (item.type) {
                case "articles":
                  return <ArticleItem item={item} key = {index} />  
              
                case "members":
                  return <MemberItem item={item} key = {index} />  
              
                case "network_opportunities":
                  return <NetworkItem item={item} key = {index} />  
              
                default:
                  break;
              }
              if(item.type == "articles"){
                
              }
            }
          }
        />
        {/* <View style = {{marginBottom: 100}}></View> */}
      </View>
    </View>
  );
};

export default FeedScreen;
