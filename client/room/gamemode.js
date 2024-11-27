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
Ui.GetContext().QuadsCount.Value = true;
// опции, игрового режима:
BlueTeam.GetContext().Pipette.Value = true;
RedTeam.GetContext().Pipette.Value = true;
BlueTeam.GetContext().BalkLenChange.Value = true;
RedTeam.GetContext().BalkLenChange.Value = true;
BlueTeam.GetContext().SetSkyEnable.Value = true;
RedTeam.GetContext().SetSkyEnable.Value = true;
BlueTeam.GetContext().GenMapEnable.Value = true;
RedTeam.GetContext().GenMapEnable.Value = true;
BlueTeam.GetContext().ChangeCameraPointsEnable.Value = true;
RedTeam.GetContext().ChangeCameraPointsEnable.Value = true;
BlueTeam.GetContext().QuadChangeEnable.Value = true;
RedTeam.GetContext().QuadChangeEnable.Value = true;
BlueTeam.GetContext().BuildModeEnable.Value = true;
RedTeam.GetContext().BuildModeEnable.Value = true;
BlueTeam.GetContext().CollapseChangeEnable.Value = true;
RedTeam.GetContext().CollapseChangeEnable.Value = true;
BlueTeam.GetContext().RenameMapEnable.Value = true;
RedTeam.GetContext().RenameMapEnable.Value = true;
BlueTeam.GetContext().ChangeMapAuthorsEnable.Value = true;
RedTeam.GetContext().ChangeMapAuthorsEnable.Value = true;
BlueTeam.GetContext().LoadMapEnable.Value = true;
RedTeam.GetContext().LoadMapEnable.Value = true;
BlueTeam.GetContext().ChangeSpawnsEnable.Value = true;
RedTeam.GetContext().ChangeSpawnsEnable.Value = true;

// Параметры, игры:
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// Стандартные - команды:
Teams.Add("Blue", "Teams/Blue", new Color(0, 0, 1, 0));
Teams.Add("Red", "Teams/Red", new Color(1, 0, 0, 0));
var BlueTeam = Teams.Get("Blue");
var RedTeam = Teams.Get("Red");
BlueTeam.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
RedTeam.Get("Red").Spawns.SpawnPointsGroups.Add(2);
BlueTeam.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
RedTeam.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
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
