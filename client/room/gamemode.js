//var System = importNamespace('System');
import { Damage, BreackGraph, Build, Ui, Teams, Inventory, Spawns, GameMode, BuildBlocksSet, Properties } from 'pixel_combats/room';
import * as teams from './default_teams.js';

// Настройки, опции 
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// Делаем возможность, ломать все блоки  
BreackGraph.BreackAll = true;
// Показываем, количество квадов 
Ui.GetContext().QuadsCount.Value = true;
// Опции 
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// Игровое, состояние
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// Создаём, команды
var red = GameMode.Parameters.GetBool("RedTeam");
var blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) teams.create_team_red();
if (blue || !red && !blue) teams.create_team_blue();
	if(GameMode.Parameters.GetBool("BlueHasNothing")){
		var Inventory = Inventory.GetContext();
		Teams.Get("Blue").Inventory.Main.Value = false;
		Teams.Get("Blue").Inventory.Secondary.Value = false;
		Teams.Get("Blue").Inventory.Melee.Value = false;
		Teams.Get("Blue").Inventory.Explosive.Value = false;
		Teams.Get("Blue").Inventory.Build.Value = false;

	}
}

// Разрешаем, вход в команды
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// Спавн по вход, в команду
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// Задаём, подсказку 
Ui.GetContext().Hint.Value = "!Мирный, режим!";

// Конфигурация, инвентаря
var Inventory = Inventory.GetContext();
Inventory.Main.Value = false;
Inventory.Secondary.Value = false;
Inventory.Melee.Value = true;
Inventory.Explosive.Value = false;
Inventory.Build.Value = true;
Inventory.BuildInfinity.Value = true;

// Делаем, все чистые блоки 
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// Моментальный, спавн 
Spawns.GetContext().RespawnTime.Value = 0;
