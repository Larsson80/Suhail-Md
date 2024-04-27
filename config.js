const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Roy:botpassword123@cluster0.8rkuagt.mongodb.net/"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || "mongodb+srv://Roy:botpassword123@cluster0.8rkuagt.mongodb.net/"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/GrhNeAQ7bWhHtIPwMK6KP9";
global.website=process.env.GURL || "https://chat.whatsapp.com/GrhNeAQ7bWhHtIPwMK6KP9" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b7052fd23ed07970804.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237676998253";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "237676998253,237xxxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_32_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzLFxuICAgICAgICA2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk2LFxuICAgICAgICA3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE1LFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvTnpEU3dtOVErblhOWmNZczQyTXJKYzgzaCszSmtqMzdVV1Y0YU5nYUMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItbEM4QzZ0dVJFT0ZwaS16Y204QXBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI1YTVlMGYxLTM2MzctNDJmZC04ZDgzLWZkMDE4M2E1NTRhM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAxNzIsXG4gICAgICAyMzEsXG4gICAgICA4NCxcbiAgICAgIDEzOCxcbiAgICAgIDE3OSxcbiAgICAgIDI1NCxcbiAgICAgIDY3LFxuICAgICAgMjAzLFxuICAgICAgOTksXG4gICAgICA5MCxcbiAgICAgIDE0NyxcbiAgICAgIDIwOCxcbiAgICAgIDQzLFxuICAgICAgMTkxLFxuICAgICAgMTk5LFxuICAgICAgMjExLFxuICAgICAgMjA1LFxuICAgICAgMTMxLFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMjEsXG4gICAgICAyNTMsXG4gICAgICAxNDYsXG4gICAgICA4MSxcbiAgICAgIDUwLFxuICAgICAgMSxcbiAgICAgIDE0NSxcbiAgICAgIDc0LFxuICAgICAgMTYyLFxuICAgICAgMjQsXG4gICAgICAxMzMsXG4gICAgICAxMjAsXG4gICAgICA2OCxcbiAgICAgIDE4NCxcbiAgICAgIDIxNCxcbiAgICAgIDg0LFxuICAgICAgMTg0LFxuICAgICAgMTU4LFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0krVnhiQURFTStsdGJFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUUNWWTJYVkNBbW5WemozNzJ4TXloQzhRcXprR1grd2Jqd3dxUUtDYm1CRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZTE81RENUMmpSUFNZWlRWZDJCNjBIeDBGbXJVTUY1dXJ3WmVXWWc3RnRjaXcxNmp0TEJvS2wzVjZhbVBzWnNQeGlPTlNFTHA3cEhpNmNnQlZKNThDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4NmxGUVBzV1NocnozODd4dGhOejNuMlBxYXpSNGZRcmpBY0NndG8zTDNlYmhPS3daMzNLUjBLN2JDalg3bVNIajZiWmltNDFOQ2ZGRHhEYnJ6bzVBQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY3Njk5ODI1MzozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMxMjQxMzQ5MjUxMjU0OjM3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njc2OTk4MjUzOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDI0NjM1NlxufSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "꧁༒Røყ Jůɱäɳʝι™༒꧂" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Te@m Jumanji",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Jůɱäɳʝι™ Bot༒",
  ownername:process.env.OWNER_NAME|| "꧁༒Røყ Jůɱäɳʝι™༒꧂",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
