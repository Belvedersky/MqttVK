import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
// import MessageList from '../components/datalist';
import { Connector } from "mqtt-react-hooks";
import Status from "../components/status";
import Form from "../components/sendMessage";
import ListM from "../components/list";

const Home = ({ id, fetchedUser, data }) => {
  return (
    <Connector brokerUrl="wss://3609e5c0:5e558df93294fa5f@broker.shiftr.io/">
      <Panel id={id}>
        <PanelHeader>
          <Status />
        </PanelHeader>

		<Div>
			<Form />

			
				  <ListM/>
				 </Div>
	  </Panel>
	  
	</Connector>
	
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
