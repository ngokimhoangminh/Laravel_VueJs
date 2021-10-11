<?php
namespace App\Validates;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BrandValidate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->brand;
        return [
                'name' => ['required',Rule::unique('brands')->ignore($id),'max:255'],
                'description'=> 'required|min:10',
                'status'=> 'required'
            ];
    }
    public function messages(){
        return [
            'name.required' => 'Yêu cầu nhập tên danh mục',
            'name.unique' => 'Thương hiệu đã tồn tại ,xin nhập tên thương hiệu khác',
            'description.required' => 'Mô tả thương hiệu hiện chưa có',
            'description.min' => 'Mô tả phải có ít nhất 10 ký tự',
            'status.required' => 'Bạn chưa chọn trạng thái'
        ];
    }
}

?>