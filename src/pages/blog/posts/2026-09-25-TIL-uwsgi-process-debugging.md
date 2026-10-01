---
layout: "@/layouts/posts/Entry.astro"
title: "TIL: Uwsgi Process Debugging"
pubDate: 2026-09-25
tags: ["TIL"]
---

Today I had to debug a uwsgi cron job that called a Django management command. It had hung on something and I wanted to find the root cause instead of just restarted the app to get it unstuck. When trying to investigate the uwsgi processes thinking I could glean more info from the process itself I discovered the uWSGI stats socket. 

I ran 
```
uwsgi --connect-and-read /tmp/stats.socket
``` 
which gave me a very detailed readout on the different uWSGI processes running. In it there's a cron section that looks like this:
```
"crons":[
  {
    "minute":-5,
    "hour":-1,
    "day":-1,
    "month":-1,
    "week":-1,
    "command":"/usr/local/bin/python /code/manage.py my_management_command",
    "unique":1,
    "pid":58222,
    "started_at":1788358800
  },
  ...
],
```
That pid was the key to me figuring out what was happening because...
