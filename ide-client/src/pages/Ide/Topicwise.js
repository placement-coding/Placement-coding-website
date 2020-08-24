import React, { useState } from "react";
import axios from "axios";
import { Card, Icon, Image,Grid } from "semantic-ui-react";
import { GridList } from "@material-ui/core";

const Topicwise = () => {
  const topics = ["Array","Linkedlist","Stack","Queue","Tree","BST","Heap","Hashing","Matrix","Graph","DP"];
  return (
    
        <GridList cols="md" cellHeight={150}>
          {topics.map((item, index) => (
            <Card>
             
             <Card.Content header={item} />
              
            </Card>
          ))}
        </GridList>
  
  );
};
export default Topicwise;
