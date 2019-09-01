<template>
  <el-container>
    <el-row style="width: 100%">
      <el-col :span="6">
        <div style="height: 360px"></div>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover" style="min-height: 700px;padding: 12px">
          <el-row>
            <el-col :span="11" style="display: flex;flex-direction: column">
              <div>总资产: 100000.00</div>
              <div>理财:</div>
              <div>基金:</div>
            </el-col>
            <el-col :span="2">
              <el-divider direction="vertical"></el-divider>
            </el-col>
            <el-col :span="11" style="display: flex;flex-direction: column">
              <div>昨日收益: 1.00</div>
              <div>昨日消费:</div>
              <div>7788:</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" style="height: 360px;margin-left: 12px">
          <div>瞎几把东西</div>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'tracer'
}
</script>

<style scoped>

</style>
