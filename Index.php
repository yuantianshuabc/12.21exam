<?php
namespace app\articles\controller;

use app\articles\model\Article;

class Index
{
    public function index()
    {
        $data = Article::select();
        return json(['data'=>$data]);
    }
    public function shoucang(){
     $id = input('id');
     $data = Article::where('id',$id)->setInc('collection',1);

     if ($data){
         $datas = Article::select();
         return json(['code'=>200,'msg'=>'收藏成功','data'=>$datas]);
     }else{
         return json(['code'=>500,'msg'=>'系统繁忙请稍后再试','data'=>[]]);
     }
    }
}
