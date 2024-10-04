import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';

import { CreateProductDto, UpdateProductDto } from './dto';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('product');

  constructor(private readonly prismaService: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prismaService.product.create({
        data: createProductDto,
      });
    } catch (error) {
      this.logger.error(error);

      if (error instanceof Prisma.PrismaClientKnownRequestError)
        this.prismaService.handleDBError(
          error,
          `Product ${createProductDto.name} can't create`,
        );
    }
  }

  async findAll() {
    return await this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });

    if (!product) throw new NotFoundException(`Product ${id} not found`);

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const productUpdated = await this.prismaService.product.update({
        data: updateProductDto,
        where: { id },
      });

      return productUpdated;
    } catch (error) {
      this.logger.error(error);

      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      )
        throw new NotFoundException(`Product ${id} not found, can't update`);

      throw new InternalServerErrorException(
        'Internal Error: Read a logs on server',
      );
    }
  }

  async remove(id: number) {
    try {
      const deleteProduct = await this.prismaService.product.delete({
        where: { id },
      });

      if (!deleteProduct)
        throw new NotFoundException(`Product ${id} not found`);

      return deleteProduct;
    } catch (error) {
      this.logger.error(error);

      if (error instanceof Prisma.PrismaClientKnownRequestError)
        this.prismaService.handleDBError(
          error,
          `Product ${id} not found, can't delete`,
        );

      if (error instanceof HttpException) throw error;

      throw new InternalServerErrorException(
        'Internal Error: Read a logs on server',
      );
    }
  }
}
