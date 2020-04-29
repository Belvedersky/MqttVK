import React from 'react'
import { useMqttState } from 'mqtt-react-hooks';

import Icon28CheckCircleOutline from '@vkontakte/icons/dist/28/check_circle_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Pause from '@vkontakte/icons/dist/28/pause';
import Icon28ErrorOutline from '@vkontakte/icons/dist/28/error_outline';

export default function Status() {

  /*
  * Status list
  * - offline
  * - connected
  * - reconnecting
  * - closed
  */
  const { status } = useMqttState();
  switch (status){
    case "offline":
      return (
        <Icon28ErrorOutline fill="#942916"  /> 
      );
    case "connected":
      return (
        <Icon28CheckCircleOutline  fill="#17753b"  /> 
      );
    case "reconnecting":
      return (
        <Icon28SettingsOutline fill="##e3d79d" /> 
      );
    case "closed":
      return (
        <Icon28Pause fill="#99483a" /> 
      );
    default:
      return (
        `Status: ${status}`
        
      );
  }
  
  
}
