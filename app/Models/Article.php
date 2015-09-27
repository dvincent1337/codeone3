<?php
namespace Models;

use Core\Model;

class Article extends Model {

    protected $_db;

    public function __construct(){
        //connect to PDO here.
        $this->_db = \helpers\database::get();

    }
    public function createArticle($data){
        $this->_db->insert('article',$data);
        return $this->_db->lastInsertId();
    }
    public function updateArticle($data) {
        $this->_db->update('article', $data, ['article_id'=>$data['article_id']]);
    }
    public function getArticle($article_id) {
        return $this->_db->select('SELECT * FROM article WHERE article_id=:article_id',
            ['article_id'=>$article_id]);
    }
    public function getArticlesByCategory($category_id) {
        return $this->_db->select("SELECT * FROM article WHERE category_id=:category_id",
            ['category_id'=>$category_id]);
    }

    public function getAllCategories() {
        $sql = "SELECT * from categories ";
        return $this->_db->raw($sql);
    }
    public function getAllSections() {
        $sql = "SELECT * from `section`";
        return $this->_db->raw($sql);
    }

    public function getArticleCategories() {
        $sql = "
          select root.category_name  as root_category_name
                 , down1.category_name as down1_category_name
                 , down2.category_name as down2_category_name
                 , down3.category_name as down3_category_name
                 , down4.category_name as down4_category_name
              from categories as root
            left outer
              join categories as down1
                on down1.category_parent_id = root.category_id
            left outer
              join categories as down2
                on down2.category_parent_id = down1.category_id
            left outer
              join categories as down3
                on down3.category_parent_id = down2.category_id
            left outer
              join categories as down4
                on down4.category_parent_id = down3.category_id
             where root.category_parent_id = 1
            order
                by root_category_name
                 , down1_category_name
                 , down2_category_name
                 , down3_category_name
                 , down4_category_name";
        return $this->_db->raw($sql);
    }

}