// import React, { useState,useEffect } from "react";
import React, { useState } from "react";

import { useMqttState } from "mqtt-react-hooks";

import { FormLayout,
         FormLayoutGroup,
         Input,
         Button,
        } from "@vkontakte/vkui";

export default function Form() {
  const { mqtt } = useMqttState();
  const [topic, setTopic] = useState("messages/");
  const [message, setMessage] = useState("Hello world!");
  
  const handleSubmit = (evt) => {

    evt.preventDefault();
    return mqtt.publish(topic, message);
  };
  
  return (

    
      <FormLayout onSubmit={handleSubmit}>
        <FormLayoutGroup top="Отправить MQTT сообщение">
          <Input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Введите топик"
          />
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Введите сообщение"
          />

          <Button size="xl" level="2" type="submit" value="Submit">
            Отправить
          </Button>
        </FormLayoutGroup>
      </FormLayout>
  );
}
