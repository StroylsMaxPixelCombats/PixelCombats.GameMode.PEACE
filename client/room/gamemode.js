import { Color } from 'pixel_combats/basic';
import { Inventory, BreackGraph, Properties, BuildBlocksSet, Damage, Teams, Ui, Build, Spawns, GameMode } from 'pixel_combats/room';

// Применяем - параметры, создания комнаты: 
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// Параметры, игры:
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// Стандартные - команды:
Teams.Add("Blue", "Teams/Blue", new Color(0, 0, 1, 0));
Teams.Add("Red", "Teams/Red", new Color(1, 0, 0, 0));
var BlueTeam = Teams.Get("Blue");
var RedTeam = Teams.Get("Red");
BlueTeam.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
RedTeam.Get("Red").Spawns.SpawnPointsGroups.Add(2);

// Делаем возможно - ломать все блоки:
BreackGraph.BreackAll = true;
// Показываем, количество - квадов:
Ui.GetContext().QuadsCount.Value = true;
// опции, игрового режима:
Build.GetContext().Pipette.Value = true;
Build.GetContext().FloodFill.Value = true;
Build.GetContext().FillQuad.Value = true;
Build.GetContext().RemoveQuad.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().FlyEnable.Value = true;
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
Build.GetContext().BuildRangeEnable.Value = true;

// Настройки:
if (GameMode.Parameters.GetBool("BlueHasNothing")) {
 var inventory = Inventory.GetContext();
 Teams.Get("BlueTeam").Inventory.Main.Value = false;
 Teams.Get("BlueTeam").Inventory.Secondary.Value = false;
 Teams.Get("BlueTeam").Inventory.Melee.Value = false;
 Teams.Get("BlueTeam").Inventory.Explosive.Value = false; 
 Teams.Get("BlueTeam").Inventory.Build.Value = false;
}
// Разрешаем, вход в команды - по запросу:
Teams.OnRequestJoinTeam.Add(function(Player,Team){Team.Add(Player);});
// Разрешаем, спавн - по входу в, команду:
Teams.OnPlayerChangeTeam.Add(function(Player){ Player.Spawns.Spawn()});

// Задаём, подсказку - игроку:
Ui.GetContext().Hint.Value = "BuildBase";

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
