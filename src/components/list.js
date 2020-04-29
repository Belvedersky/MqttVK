import React from 'react';

import { useSubscription } from 'mqtt-react-hooks';
import {List, Cell,Group,Header} from "@vkontakte/vkui";
export default function ListM() {

  /* Message structure:
  *  id: auto-generated uuidv4
  *  topic: string
  *  message: object || string
  */
  const { msgs } = useSubscription('messages/#');

  return (
    <Group header={<Header mode="secondary">Cообщения c топика messages/# </Header>}>
    <List>
    {msgs?.map(message => (
        <Cell description={`${message.topic}`}  key={message.id}>
          {`${message.message}`}
        </Cell>
    ))}
    </List>
    </Group>
  );
}