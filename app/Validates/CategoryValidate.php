<?php
namespace App\Validates;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CategoryValidate extends FormRequest
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
        $id = $this->category;
        return [
                'name' => ['required',Rule::unique('categories')->ignore($id),'max:255'],
                'image' => (!empty($id) ? '' : 'required|').'image|mimes:jpg,png,jpeg,gif,svg|max:2048|dimensions:min_width=100,min_height=100,max_width=2000,max_height=2000', 
            ];
    }
    public function messages(){
        return [
            'name.required' => 'Yêu cầu nhập tên danh mục',
            'name.unique' => 'Danh mục đã có ,xin nhập tên danh mục khác',
            'image.required' => 'Bạn chưa chọn hình ảnh',
            'image.image' => 'Ảnh phải là file ảnh',
            'image.mimes' => 'Ảnh phải là file ảnh jpg | png | gif | svg'
        ];
    }
}

?>