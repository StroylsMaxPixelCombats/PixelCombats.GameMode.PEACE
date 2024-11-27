import { DisplayValueHeader, Color } from 'pixel_combats/basic';
import { Inventory, BreackGraph, Properties, Damage, Teams, Ui, Build, Spawns, GameMode } from 'pixel_combats/room';

// Применяем - параметры, создания комнаты: 
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

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
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// Стандартные - команды:
Teams.Add("Blue", "Teams/Blue", new Color(0, 0, 1, 0));
Teams.Add("Red", "Teams/Red", new Color(1, 0, 0, 0));
var BlueTeam = Teams.Get("Blue");
var RedTeam = Teams.Get("Red");
BlueTeam.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
RedTeam.Get("Red").Spawns.SpawnPointsGroups.Add(2);
// Настройки:
if (GameMode.Parameters.GetBool("BlueHasNothing")) {
 var inventory = Inventory.GetContext();
 Teams.Get("BlueTeam").inventory.Main.Value = false;
 Teams.Get("BlueTeam").inventory.Secondary.Value = false;
 Teams.Get("BlueTeam").inventory.Melee.Value = false;
 Teams.Get("BlueTeam").inventory.Explosive.Value = false; 
 Teams.Get("BlueTeam").inventory.Build.Value = false;
}
if (GameMode.Parameters.GetBool("BlueTeam")) {
 var BlueTeam = Teams.Get("Blue");
}
if (GameMode.Parameters.GetBool("BlueTeam")) {
 var RedTeam = Teams.Get("Red");
}
// Разрешаем, вход в команды - по запросу:
Teams.OnRequestJoinTeam.Add(function(Player,Team){Team.Add(Player);});
// Разрешаем, спавн - по входу в, команду:
Teams.OnPlayerChangeTeam.Add(function(Player){ Player.Spawns.Spawn()});

// Задаём, подсказку - игроку:
Ui.GetContext().Hint.Value = "Hint/BuildBase";

// Конфигурация - инвентаря:
var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = true;
inventory.Explosive.Value = false;
inventory.Build.Value = true;
inventory.BuildInfinity.Value = true;

// Моментальный - спавн:
Spawns.GetContext().RespawnTime.Value = 0;

// Разрешаем, игрокам - чистые блоки:
Build.BlocksSet.Value = BuildBlocksSet.AllClear;
