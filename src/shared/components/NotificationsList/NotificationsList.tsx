import { v4 as uuidv4 } from 'uuid';

import {UiNotification} from "@/shared/components/UiNotification";
import {useAppSelector} from "@/store/hooks.ts";
import {Notification} from "@modules/notifications/static/types";

const NotificationsList = () => {

  const notifications: Notification[] = useAppSelector((state) => state.notifications.notifications)

  return (
    <div className='fixed right-0 bottom-0 w-full max-w-xs z-50'>
      {notifications.map((notification, index) => (
        <UiNotification
          key={uuidv4()}
          type={notification.type}
          message={notification.message}
          index={index}
        />
      ))}
    </div>
  )
}

export default NotificationsList;