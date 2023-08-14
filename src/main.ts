import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const date: string = new Date().toLocaleString();

app.use(createPinia())
app.use(router)
app.provide('dates',{ date , formatDateTimeWithRelativeTime})

app.mount('#app')


function formatDateTimeWithRelativeTime(dateTimeString: string): string {
    const dateObject = new Date(dateTimeString);
    const currentDate = new Date();
  
    const timeDifferenceInMilliseconds = currentDate.getTime() - dateObject.getTime();
    const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days / 365);
  
    let relativeTime = '';
  
    if (years >= 1) {
      relativeTime = `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (weeks >= 1) {
      relativeTime = `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days >= 1) {
      relativeTime = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours >= 1) {
      relativeTime = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes >= 1) {
      relativeTime = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      relativeTime = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  
    const formattedDateTime = `${relativeTime}`;
  
    return formattedDateTime;
}