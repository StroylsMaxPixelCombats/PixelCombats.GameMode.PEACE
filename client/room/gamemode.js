import { DisplayValueHeader, Color } from 'pixel_combats/basic';
import { Players, LeaderBoard, Timers, Game, Inventory, BreackGraph, BuildBlocksSet, Damage, Teams, Ui, Build, Spawns, GameMode, Properties, msg } from 'pixel_combats/room';
import * as 
	
	
try {
 
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
Ui.GetContext().Hint.Value = "!Игровой, режим!";
// Стандартные - команды:
Teams.Add("Blue", "<b><size=30><color=#0d177c>ß</color><color=#03088c>l</color><color=#0607b0>ᴜ</color><color=#1621ae>E</color></size></b>", new Color(0, 0, 1, 0));
Teams.Add("Red", "<b><size=30><color=#962605>尺</color><color=#9a040c>ᴇ</color><color=#b8110b>D</color></size></b>", new Color(1, 0, 0, 0));
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


// ЛидерБорды:
if (GameMode.Parameters.GetBool("Tdm&Peace")) {
 LeaderBoard.PlayerLeaderBoardValues = [
	{
		Value: "Kills",
		DisplayName: "<b><size=30><color=#be5f1b>K</color><color=#b65219>i</color><color=#ae4517>l</color><color=#a63815>l</color><color=#9e2b13>s</color></size></b>",
		ShortDisplayName: "<b><size=30><color=#be5f1b>K</color><color=#b65219>i</color><color=#ae4517>l</color><color=#a63815>l</color><color=#9e2b13>s</color></size></b>"
	},
	{
		Value: "Deaths",
		DisplayName: "<b><size=30><color=#be5f1b>D</color><color=#b85519>e</color><color=#b24b17>a</color><color=#ac4115>t</color><color=#a63713>h</color><color=#a02d11>s</color></size></b>",
		ShortDisplayName: "<b><size=30><color=#be5f1b>D</color><color=#b85519>e</color><color=#b24b17>a</color><color=#ac4115>t</color><color=#a63713>h</color><color=#a02d11>s</color></size></b>"
	},
	{
		Value: "Spawns",
		DisplayName: "<b><size=30><color=#be5f1b>S</color><color=#b85519>p</color><color=#b24b17>a</color><color=#ac4115>w</color><color=#a63713>n</color><color=#a02d11>s</color></size></b>",
		ShortDisplayName: "<b><size=30><color=#be5f1b>S</color><color=#b85519>p</color><color=#b24b17>a</color><color=#ac4115>w</color><color=#a63713>n</color><color=#a02d11>s</color></size></b>"
	},
	{
		Value: "Scores",
		DisplayName: "<b><size=30><color=#be5f1b>S</color><color=#b85519>c</color><color=#b24b17>o</color><color=#ac4115>r</color><color=#a63713>e</color><color=#a02d11>s</color></size></b>",
		ShortDisplayName: "<b><size=30><color=#be5f1b>S</color><color=#b85519>c</color><color=#b24b17>o</color><color=#ac4115>r</color><color=#a63713>e</color><color=#a02d11>s</color></size></b>"
	}
];
LeaderBoard.TeamLeaderBoardValue = {
	Value: "Deaths",
	DisplayName: "Statistics\Deaths",
	ShortDisplayName: "Statistics\Deaths"
};
// Параметр, лидерБорда:
LeaderBoard.TeamWeightGetter.Set(function(Team) {
	return Team.Properties.Get("Deaths").Value;
});
LeaderBoard.PlayersWeightGetter.Set(function(Player) {
	return Player.Properties.Get("Kills").Value;
});
// Счётчики:
Damage.OnKill.Add(function(Player, Killed) {
	if (Killed.Team != null && Killed.Team != Player.Team) {
		++Player.Properties.Kills.Value;
		Player.Properties.Scores.Value += 100;
	}
});

Damage.OnDeath.Add(function(Player) {
  ++Player.Properties.Deaths.Value;
});

 Spawns.OnSpawn.Add(function(Player) {
	++Player.Properties.Spawns.Value;
 });	
}
	
// Настройки:
if (GameMode.Parameters.GetBool("BlueHasNothing")) {
 BlueTeam.Inventory.Main.Value = false;
 BlueTeam.Inventory.Secondary.Value = false;
 BlueTeam.Inventory.Melee.Value = false;
 BlueTeam.Inventory.Explosive.Value = false; 
 BlueTeam.Inventory.Build.Value = false;
}
var BlueTeam = GameMode.Parameters.GetBool("BlueTeam");
var RedTeam = GameMode.Parameters.GetBool("RedTeam");
 
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
                msg.Show(`${e.name}: ${e.message} ${e.stack}`);
        });
}
