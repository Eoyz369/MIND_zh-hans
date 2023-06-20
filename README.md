# MIND

[![Docker Pulls](https://img.shields.io/docker/pulls/mrcas/mind.svg)](https://hub.docker.com/r/mrcas/mind)
[![GitHub Downloads](https://img.shields.io/github/downloads/Casvt/MIND/total.svg)](https://github.com/Casvt/MIND/releases)

__A simple self hosted reminder application that can send push notifications to your device. Set the reminder and forget about it!__

Mind is a simple self hosted application for creating reminders that get pushed to your device using the [Apprise](https://github.com/caronc/apprise) API. You can send messages to just about every platform, including scheduled emails!

## Workings
MIND can be used for sending notifications at the desired time. This can be a set time, like a yearly reminder for a birthday, or at a button click, to easily send a predefined notification when you want to.

## Features
- Works cross-timezone
- Notifications are sent with second-precision
- Uses the [apprise library](https://github.com/caronc/apprise), giving you 80+ platforms to send notifications to
- Easily manage the reminders with sorting options, search ability and color coding
- Docker image available
- Mobile friendly web-interface
- API available

### Planned Features
You can see the planned features in the [Project board](https://github.com/users/Casvt/projects/3).

## Getting started
Replace the timezone value (`TZ=`) to the [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of your timezone!
```bash
docker run -d \
	--name mind \
	-v mind-db:/app/db \
	-e TZ=Europe/Amsterdam \
	-p 8080:8080 \
	mrcas/mind:latest
```

More information about installing can be found [in the wiki](https://casvt.github.io/MIND/).

## Contact
- For support, a [discord server](https://discord.gg/nMNdgG7vsE) is available
- Alternatively, [make an issue](https://github.com/Casvt/MIND/issues)
