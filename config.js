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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_59_03_03_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR040UytRQ1ZEUjd0dnVDeTh0U3hRbUtyOFFjQ0wzUUtSWkhRLzVZL28xWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImRYR3c0NUhNM1RrZkV5bEZNa2c4MVltL3FPUTcrMk1aeVBOZGFyaU9mVmM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS0tKUC9CcUpqeGtsVS9icU9PZFl3d1oyTlJDT2hRdlBGWk1RZFBzclMyWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJzQUEyTFpDM0dQcTU0SzR0cDJidTE4eVNTQmtIb2treHRkYWQySE13QUU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOE1TMzFneGNRZzNpVHphd3pEZklVcW1JZWpRY0hWN0UveStlN1loUHkwVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjQvYTJCTStvczZGQmhvUFZBWHE4emg5RkpKTVNJeTY3MzhaSVpjZmJiQmM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLTkp0dUpKSHRFNHgzZ0VFU2x0ckNIS0tqeVMrdEFxZWZZakZORCtISFdVPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWkFmVTFoSmVra2dPT1QvQUNBNlNsaFNHem5yZUw5TlhyRG9MUzZ4Zlkzaz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJUaDBoaTZ6TXFYdFRPNHZYYnQvWnlwaUxKSk1uaWJBNnZvZ29NNmwwREhRZjN5VThMMExGSm8vUmhYMk41YTFoSis2U3pXV0pJS01qNVBsUmZaTTNDQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjE5LFwiYWR2U2VjcmV0S2V5XCI6XCIxWUl5Y0tjUll1ZE5pUkphNWJYWFBxZEpWR2d4SDhsZTlLaDZGb1RjTWhrPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiX0xEdWlGWTVUVlNBNjgzaGxzQ210Z1wiLFwicGhvbmVJZFwiOlwiZmIxMDE5ZDktMGQwMy00N2IzLThlYWQtNzg5MmNmZmMxN2FkXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXMWlNdlZ6Sm5RK0hocHZCTXVQNm1GNytlRm89XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMmdsd2Z3YjNadGVRZE8vc2hTeEtCb1BhQ1NvPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlFCSlZZR0RKXCIsXCJtZVwiOntcImlkXCI6XCIyMzc2NzY5OTgyNTM6MjBAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTMxMjQxMzQ5MjUxMjU0OjIwQGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUHlVeGJBREVPcjNrSzhHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIlFDVlkyWFZDQW1uVnpqMzcyeE15aEM4UXF6a0dYK3diand3cVFLQ2JtQkU9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJKUHc2SUw2cGJRejJXRmY3WnlHMENPczdGc3hScG9EeXFaZHNjdDkvbm5IcEo2cEp5Vlh4YkFTVHRTOTc2RUdaYy9kb09LbnYyY2pFMkU1Q0VQcjNDZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIk9EVzRDQkl4dEZRMHM5a0J3Zm04Yk4yVFNUdHBTVk1SaWFjZjE0eSsvaTBUYlR4VVRuTkorZjlPaElUYk5hU2kyWE96V0dVdmt1SjdGN25zaFoxcUFnPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzc2NzY5OTgyNTM6MjBAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCVUFsV05sMVFnSnAxYzQ5KzlzVE1vUXZFS3M1Qmwvc0c0OE1La0NnbTVnUlwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDk0NTYzNjZ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "꧁༒Røყ Jůɱäɳʝι™༒꧂" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
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
 
