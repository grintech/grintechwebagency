// // src/ZoomMeeting.js
// import React, { useEffect } from 'react';
// import { ZoomMtg } from '@zoomus/websdk';

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareJssdk();

// const API_KEY = 'your_api_key';
// const API_SECRET = 'your_api_secret';
// const MEETING_NUMBER = 'your_meeting_number';
// const USERNAME = 'your_username';
// const PASSWORD = 'your_meeting_password';
// const LEAVE_URL = 'http://localhost:3000';
// const ROLE = 0; // 0 for participant, 1 for host

// const ZoomMeeting = () => {
//   useEffect(() => {
//     ZoomMtg.setZoomJSLib('https://source.zoom.us/2.6.0/lib', '/av'); // Load latest version of Zoom SDK
//     ZoomMtg.i18n.load('en-US');
//     ZoomMtg.i18n.reload('en-US');

//     const meetConfig = {
//       apiKey: "lcpbNq3dQ42PpzSTpL0cZQ",
//       apiSecret: "ceIQ5mlu2By2IHs2va0mXw11xFpckYD5",
//       meetingNumber: MEETING_NUMBER,
//       userName: USERNAME,
//       passWord: PASSWORD,
//       leaveUrl: LEAVE_URL,
//       role: ROLE,
//     };

//     ZoomMtg.generateSignature({
//       meetingNumber: meetConfig.meetingNumber,
//       apiKey: meetConfig.apiKey,
//       apiSecret: meetConfig.apiSecret,
//       role: meetConfig.role,
//       success: function (res) {
//         console.log('Signature generated', res.result);
//         ZoomMtg.init({
//           leaveUrl: meetConfig.leaveUrl,
//           isSupportAV: true,
//           success: function () {
//             ZoomMtg.join({
//               meetingNumber: meetConfig.meetingNumber,
//               userName: meetConfig.userName,
//               signature: res.result,
//               apiKey: meetConfig.apiKey,
//               userEmail: '', // optional
//               passWord: meetConfig.passWord,
//               success: function (res) {
//                 console.log('Join meeting success', res);
//               },
//               error: function (res) {
//                 console.log(res);
//               },
//             });
//           },
//           error: function (res) {
//             console.log(res);
//           },
//         });
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Zoom Meeting</h1>
//       <div id="zmmtg-root" />
//     </div>
//   );
// };

// export default ZoomMeeting;
