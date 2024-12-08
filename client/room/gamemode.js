import { Color } from 'pixel_combats/basic';
import { Players, Inventory, BreackGraph, BuildBlocksSet, Damage, Teams, Ui, Build, Spawns, GameMode } from 'pixel_combats/room';

try {
 
// Применяем - параметры, создания комнаты: 
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// Консоль:
 Player.("9183CF2B463E5CD6").Inventory.Value = true;
 Player.("9183CF2B463E5CD6").Inventory.Secondary.Value = true;
 Player.("9183CF2B463E5CD6").Inventory.Explosive.Value = true;

// Параметр, игры:
Ui.GetContext().Hint.Value = "!Стройте, карту!";
if (GameMode.Parameters.GetBool("BlueTeam")) {Teams.Add("Blue", "Teams/Blue", new Color(0, 0, 1, 0));};
if (GameMode.Parameters.GetBool("RedTeam")) {Teams.Add("Red", "Teams/Red", new Color(1, 0, 0, 0));};
// Стандартные - команды:
Teams.Add("Blue", "Teams/Blue", new Color(0, 0, 1, 0));
Teams.Add("Red", "Teams/Red", new Color(1, 0, 0, 0));
var BlueTeam = Teams.Get("Blue");
var RedTeam = Teams.Get("Red");
BlueTeam.Spawns.SpawnPointsGroups.Add(1);
RedTeam.Spawns.SpawnPointsGroups.Add(2);
BlueTeam.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
RedTeam.Build.BlocksSet.Value = BuildBlocksSet.AllClear;

// Делаем возможно - ломать все блоки:
BreackGraph.BreackAll = true;
// Показываем, количество - квадов:
Ui.GetContext().QuadsCount.Value = true;
// опции, игрового режима:
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
 
// Настройки:
if (GameMode.Parameters.GetBool("BlueHasNothing")) {
 BlueTeam.Inventory.Main.Value = false;
 BlueTeam.Inventory.Secondary.Value = false;
 BlueTeam.Inventory.Melee.Value = false;
 BlueTeam.Inventory.Explosive.Value = false; 
 BlueTeam.Inventory.Build.Value = false;
}
// Разрешаем, вход в команды - по запросу:
Teams.OnRequestJoinTeam.Add(function(Player, Team) { Team.Add(Player); });
// Разрешаем, спавн - по входу в, команду:
Teams.OnPlayerChangeTeam.Add(function(Player) { Player.Spawns.Spawn(); });

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

  } catch (e) {
            Players.All.forEach(p => {
                Player.PopUp(`${e.name}: ${e.message} ${e.stack}`);
        });
}
