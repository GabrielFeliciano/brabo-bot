import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { GatewayIntentBits } from 'discord.js';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotCommandsModule } from './commands/commands.module';

@Module({
  imports: [
    DiscordModule.forRootAsync({
      useFactory: () => ({
        token: process.env.TOKEN,
        discordClientOptions: {
          intents: [GatewayIntentBits.Guilds],
        },
      }),
    }),
    BotCommandsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
