<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}" >
        <script>window.Laravel={csrfToken:'{{csrf_token()}}'}</script>
        <title>Quản trị</title>

        <!-- Fonts -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{mix('admin/css/app.css')}}">
        <link rel="stylesheet" href="{{asset('assets/admin/vendors/iconfonts/mdi/css/materialdesignicons.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/admin/vendors/iconfonts/ionicons/dist/css/ionicons.css')}}">
        <link rel="stylesheet" href="{{asset('assets/admin/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css')}}">
        <link rel="stylesheet" href="{{asset('assets/admin/vendors/css/vendor.bundle.base.css')}}">
        <link rel="stylesheet" href="{{asset('assets/admin/vendors/css/vendor.bundle.addons.css')}}">
        <link rel="stylesheet" href="{{asset('assets/admin/css/shared/style.css')}}">
        <link rel="stylesheet" href="{{asset('assets/admin/css/demo_1/style.css')}}">
        <link rel="stylesheet" href="{{asset('assets/admin/css/styles.css')}}">
        <link rel="shortcut icon" href="{{asset('assets/admin/images/favicon.ico')}}">
        <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.7.0/css/buttons.dataTables.min.css">

        
        <!-- Styles -->
    </head>
    <body>
        <div id="app">
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="{{asset('assets/admin/vendors/js/vendor.bundle.base.js')}}"></script>
        <script src="{{asset('assets/admin/vendors/js/vendor.bundle.addons.js')}}"></script>
        <script src="{{asset('assets/admin/js/shared/off-canvas.js')}}"></script>
        <script src="{{asset('assets/admin/js/shared/misc.js')}}"></script>
        <script src="{{asset('assets/admin/js/demo_1/dashboard.js')}}"></script>
        <script src="https://unpkg.com/element-ui/lib/index.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.js"></script>
        <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
        <script type="text/javascript" src="{{mix('admin/js/app.js')}}"></script>
    </body>
</html>
