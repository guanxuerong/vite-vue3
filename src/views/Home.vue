<!-- Home.vue -->
<template>
  <div>
    商品管理
    <el-button type="text" @click="handleOpen">点击打开 Dialog</el-button>
    <el-dialog
      append-to="#app"
      title="提示"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dialogVisible = ref(false);

const handleOpen = () => {
  dialogVisible.value = true;
  console.log(111111111222222, dialogVisible);
};
</script>