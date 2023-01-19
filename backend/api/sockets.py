import socketio

sio  = socketio.Server()
app = socketio.WSGIApp(sio)

@sio.event
def connect(sid, environ):     
    print(sid, 'conectado')

@sio.event
def disconnect(sid):
    print(sid, 'desconectado')