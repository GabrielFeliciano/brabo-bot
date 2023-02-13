import { Command, Handler } from '@discord-nestjs/core';
import { CommandInteraction } from 'discord.js';
import { Injectable } from '@nestjs/common';

@Command({
  name: 'ping',
  description: 'Pings the Brabo bot',
})
@Injectable()
export class PingCommand {
  @Handler()
  onPlaylist(_interaction: CommandInteraction): string {
    return 'pong!';
  }
}
