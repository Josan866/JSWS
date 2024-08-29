set shellobj = CreateObject("WScript.shell")
shellobj.run "cmd"

wscript.sleep 100
shellobj.sendkeys "start code\CMD.cmd"
shellobj.sendkeys "{ENTER}"
shellobj.sendkeys "exit"
shellobj.sendkeys "{ENTER}"