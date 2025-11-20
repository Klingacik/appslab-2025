import {Component, computed, inject, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../players/players.service';
import { Player } from '../players/player';
import {PlayerLevel, playerLevels} from '../players/levels';
import {MatProgressBar} from '@angular/material/progress-bar';
import {QuestListComponent} from '../quests/quest-list/quest-list.component';
import {DecimalPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {Quest} from '../quests/quest';

@Component({
  selector: 'app-player-detail',
  imports: [MatProgressBar, QuestListComponent, DecimalPipe, MatButton],
  templateUrl: './player-detail.html',
  styleUrl: './player-detail.css'
})
export class PlayerDetail {
  route: ActivatedRoute = inject(ActivatedRoute);
  playersService: PlayersService = inject(PlayersService);

  player = signal<Player | undefined>(this.playersService.getPlayerById(Number(this.route.snapshot.params['id'])));
  playerTotalXp = computed(() =>
    this.player()?.completedQuests.reduce((sum, current) => sum + current.xp, 0) || 0);
  playerLevel = computed(() => [...playerLevels].reverse().find(level => level.xpRequired <= this.playerTotalXp()) || playerLevels[0]);
  percentageToNextLevel = computed(() => this.calculatePercentageToNextLevel(this.playerLevel()));

  moveToDone(questId: number) {
    this.player.update(p => {
      if (!p) {
        return;
      }
      const {removed, added} = this.replaceQuest(p.assignedQuests, p.completedQuests, questId);
      return { ...p, assignedQuests: removed, completedQuests: added };
    });
  }

  moveToAssigned(questId: number) {
    this.player.update(p => {
      if (!p) {
        return;
      }
      const {removed, added} = this.replaceQuest(p.completedQuests, p.assignedQuests, questId);
      return { ...p, assignedQuests: added, completedQuests: removed };
    });
  }

  private replaceQuest(questsToBeRemovedFrom: Quest[], questsToBeAddedTo: Quest[], questId: number): {removed: Quest[], added: Quest[]} {
    const questIndex = questsToBeRemovedFrom.findIndex(q => q.id === questId);
    if (questIndex > -1) {
      const quest = questsToBeRemovedFrom.splice(questIndex, 1);
      return {
        removed: [...questsToBeRemovedFrom.filter(q => q.id !== questId)],
        added: [...questsToBeAddedTo, ...quest]
      }
    }
    return {
      removed: questsToBeRemovedFrom,
      added: questsToBeAddedTo
    }
  }

  private calculatePercentageToNextLevel(currentLevel: PlayerLevel): number {
    const nextLevelIndex = playerLevels.indexOf(currentLevel) + 1;
    if (nextLevelIndex >= playerLevels.length) {
      return 100;
    }
    const nextLevel = playerLevels[nextLevelIndex];
    const xpForCurrentLevel = currentLevel.xpRequired;
    const xpIntoCurrentLevel = this.playerTotalXp() - xpForCurrentLevel;
    const xpNeededForNextLevel = nextLevel.xpRequired - xpForCurrentLevel;
    return Math.floor((xpIntoCurrentLevel / xpNeededForNextLevel) * 100);
  }
}
