<?php
header('content-type:text/html;charset=utf-8');
class Login{
	private $accounts = array(
	array(
			'account' => 'wangweidong666',
			'password'=> 'wangweidong666',
		),
	array(
			'account' => 'wangweidong888',
			'password'=> 'wangweidong888',
		)
	);
	
	public function checkLogin($account,$password){
		foreach($this->accounts as $v){
			if($v['account'] === $account && $v['password'] === $password){
				return true;
			}
		}
		return false;
	}
}
?>