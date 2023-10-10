import json
from channels.generic.websocket import AsyncWebsocketConsumer

class chatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_group_name


        await self.channel_layer.group_add(            
            self.room_group_name,
            self.channel_name
        )

        await self.accept()


    async def disconnect(self, close_code):
        await self.channel_layer.discard(
            self.room_group_name,
            self.channel_name
        )

    async def recive(self,text_data = None,bytes_data=None):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        await self.channel_layer.group_send(            
            self.room_group_name,
            {
                'type' : 'chat_message',
                'message' : message
            }
        )

    async def chat_message(self,event):
        message = event['message']
        await self.send(text_data = json.dumps({
            'message' : message
        }))