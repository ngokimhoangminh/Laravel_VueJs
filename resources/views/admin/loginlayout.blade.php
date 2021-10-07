<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang Đăng Nhập</title>
</head>
<body>
    <div id="app_login">
        <div class="w3layouts-main">
	<h2>Đăng nhập ngay</h2>
	
		<form action="{{URL::to('/admin_login')}}" method="post">
			{{csrf_field()}}
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="ggg" name="admin_email" placeholder="E-MAIL" required="">
            </div>
		 	<div class="form-group">
                <label>Mật Khẩu</label>
                <input type="password" class="ggg" name="admin_password" placeholder="PASSWORD" required="">
            </div>
			
			<span><input type="checkbox" />Nhớ mật khẩu</span>
			<h6><a href="#">Quên mật khẩu?</a></h6>
				<div class="clearfix"></div>
				<input type="submit" value="Sign In" name="login">
		</form>
		<p>Bạn chưa có tài khoản ?<a href="registration.html">Tạo tài khoản</a></p>
</div>
    </div>
</body>
</html>