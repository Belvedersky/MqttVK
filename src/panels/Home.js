import React, { useState } from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import {Div, Link, Group, PanelHeaderButton,Cell,Avatar } from '@vkontakte/vkui';

import { Connector } from "mqtt-react-hooks";
import Status from "../components/status";
import Form from "../components/sendMessage";
import ListM from "../components/list";

const Home = ({ id, fetchedUser }) => {
  return (
    
      <Panel id={id}>
    
      {fetchedUser &&
        <Connector brokerUrl="mqtts://3609e5c0:5e558df93294fa5f@broker.shiftr.io/" opts={{clientId: `vk_${fetchedUser.id}`}}>
        <PanelHeader
        left={<PanelHeaderButton ><Status/></PanelHeaderButton>}
        >
        Id: vk_{fetchedUser.id}
        </PanelHeader>
        <Div>
        <Group title="Navigation Example">
          <p> Для просмотра воспользуйтесь <Link href="https://shiftr.io/ncca_user/vk/embed?zoom=" target="_blank"> картой  </Link> cообщений shiftr.io </p>
          <Form />
          <ListM />
        
        </Group>
        </Div>
        </Connector>
      }
      </Panel>

  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
