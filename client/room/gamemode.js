import { DisplayValueHeader, Color } from 'pixel_combats/basic';
import { Inventory, BreackGraph, Properties, Damage, Teams, Ui, Build, Spawns, GameMode } from 'pixel_combats/room';

// Применяем - параметры, создания комнаты: 
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.getContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.getContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.getContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.getContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// Делаем возможно - ломать все блоки:
BreackGraph.BreackAll = true;
// Показываем, количество - квадов:
Ui.getContext().QuadsCount.Value = true;
// опции, игрового режима:
Build.getContext().Pipette.Value = true;
Build.getContext().FloodFill.Value = true;
Build.getContext().FillQuad.Value = true;
Build.getContext().RemoveQuad.Value = true;
Build.getContext().BalkLenChange.Value = true;
Build.getContext().FlyEnable.Value = true;
Build.getContext().SetSkyEnable.Value = true;
Build.getContext().GenMapEnable.Value = true;
Build.getContext().ChangeCameraPointsEnable.Value = true;
Build.getContext().QuadChangeEnable.Value = true;
Build.getContext().BuildModeEnable.Value = true;
Build.getContext().CollapseChangeEnable.Value = true;
Build.getContext().RenameMapEnable.Value = true;
Build.getContext().ChangeMapAuthorsEnable.Value = true;
Build.getContext().LoadMapEnable.Value = true;
Build.getContext().ChangeSpawnsEnable.Value = true;
Build.getContext().BuildRangeEnable.Value = true;

// Параметры, игры:
Properties.getContext().GameModeName.Value = "GameModes/Peace";
// Стандартные - команды:
Teams.Add("Blue", "Teams/Blue", new Color(0, 0, 1, 0));
Teams.Add("Red", "Teams/Red", new Color(1, 0, 0, 0));
var BlueTeam = Teams.Get("Blue");
var RedTeam = Teams.Get("Red");
BlueTeam.get("Blue").Spawns.SpawnPointsGroups.Add(1);
RedTeam.get("Red").Spawns.SpawnPointsGroups.Add(2);
// Настройки:
if (GameMode.Parameters.getBool("BlueHasNothing")) {
 var inventory = Inventory.getContext();
 Teams.get("BlueTeam").inventory.Main.Value = false;
 Teams.get("BlueTeam").inventory.Secondary.Value = false;
 Teams.get("BlueTeam").inventory.Melee.Value = false;
 Teams.get("BlueTeam").inventory.Explosive.Value = false; 
 Teams.get("BlueTeam").inventory.Build.Value = false;
}
if (GameMode.Parameters.getBool("BlueTeam")) {
 var BlueTeam = Teams.get("Blue");
}
if (GameMode.Parameters.getBool("BlueTeam")) {
 var RedTeam = Teams.get("Red");
}
// Разрешаем, вход в команды - по запросу:
Teams.OnRequestJoinTeam.Add(function(Player,Team){Team.Add(Player);});
// Разрешаем, спавн - по входу в, команду:
Teams.OnPlayerChangeTeam.Add(function(Player){ Player.Spawns.Spawn()});

// Задаём, подсказку - игроку:
Ui.getContext().Hint.Value = "Hint/BuildBase";

// Конфигурация - инвентаря:
var inventory = Inventory.getContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = true;
inventory.Explosive.Value = false;
inventory.Build.Value = true;
inventory.BuildInfinity.Value = true;

// Моментальный - спавн:
Spawns.getContext().RespawnTime.Value = 0;

// Разрешаем, игрокам - чистые блоки:
Build.BlocksSet.Value = BuildBlocksSet.AllClear;
