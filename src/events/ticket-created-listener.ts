import {Message} from 'node-nats-streaming';

import {Listener} from './base-listener'

export class TicketCreatedListener extends Listener {
   subject = 'ticket:created';
   queueGroupName = 'payments-services'

   onMessage(data: any, msg: Message) {
      console.log('Event data!', data);

      msg.ack();
   }
}