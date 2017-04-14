<?php
header('content-type:text/html;charset=utf-8');
//$name;
//print_r($_POST);
//print_r($_GET);
//print_r($_REQUEST);
//print_r($_COOKIE);

//获取数据类型

/*$name = array();
echo getType($name);*/

//运算符
/*$name = '衣褶方便面';
$money = 5;

echo $name.$money.'元';*/

//包含文件
//include'login-2.php';
//include_once'login-2.php';
//require'login-2.php';
//require_once'login-2.php';

//自定义函数
/*function talk($name){
	echo $name;
}
talk('刘懿喆');*/

/*$name = '王伟东';
function talk($name){
	$name = '刘懿喆';
	echo $name;
}
talk();*/

//$talk = array('我的天','我的地','我的哥');
//print_r($talk);
//var_dump($talk);
//长度
//echo strlen($talk[0]);


//$aArr = array('我的天','我的地','我的哥');
//$aArr[0] = 'oh my god';
//$aArr['love']  = '艾薇儿';

//$aArr = array($aArr,'宝宝','抱抱');
//$aArr[0] = '凤姐';

//删除
//unset($aArr[1]);
/*foreach($aArr as $k => $v){
	echo $v.'、';
}*/
//print_r($aArr);


/*class person{
	public $name;
	public $age;
	public $sex;
	public function say($name){
		$this->name = $name;
		echo '我叫'.$this->name;
	}
}


$YiZhe = new person();
$YiZhe->say('懿喆');*/

/*class Animals{
	public $hair = '毛发';
}
class person extends Animals{
	public $name;
	public $age;
	public $sex;
	public function __construct($name,$age,$sex){
		$this->name = $name;
		$this->age = $age;
		$this->sex = $sex;
	}
	public function say(){
		echo '我叫'.$this->name.',今年'.$this->age.',性别'.$this->sex;
	}
}


$YiZhe = new person('懿喆',66,'女');*/

//var_dump($YiZhe);
//print_r($YiZhe);
//$YiZhe->say();

//echo $YiZhe->sex;


//接收前台发送过来的数据
$account = $_POST['account'];
$password = $_POST['password'];
//检测传入的账号密码是否正确
require_once('loginup.php');
//实例化login对象
$login = new Login();

$bBtn = $login -> checkLogin($account,$password);

if($bBtn){
	$url = 'home.php';
}else{
	$url = 'login.html';
	echo "<script>alert('账号密码错误，请重新输入')</script>";
	
}

?>
<script type="text/javascript">
	location.href = '<?php echo $url; ?>';
</script>